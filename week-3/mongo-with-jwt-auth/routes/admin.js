const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const existingAdmin = await Admin.findOne({ username });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await Admin.create({
        username: username,
        password: hashedPassword,
      });

      res.json({
        message: "Admin created successfully",
        details: newUser,
      });
    } else {
      res.send({ msg: "Admin Already Exists" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error creating admin" });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Admin.findOne({ username });
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

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
