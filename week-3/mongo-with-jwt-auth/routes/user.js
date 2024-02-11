const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const existingAdmin = await User.findOne({ username });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username: username,
        password: hashedPassword,
      });

      res.json({
        message: "User created successfully",
        details: newUser,
      });
    } else {
      res.send({ msg: "User Already Exists" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error creating user" });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ username });
    console.log("User found:", user);
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = await jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
      } else {
        res.status(401).json({ msg: "Incorrect email or password" });
      }
    } else {
      res.status(401).json({ msg: "No Account! Create a New One" });
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get("/users", async (req, res) => {
  const response = await User.find({});

  res.json({
    users: response,
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username; // retreiving req.username from middleware
  // const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
