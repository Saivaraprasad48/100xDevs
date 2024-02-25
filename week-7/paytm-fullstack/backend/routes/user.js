const express = require("express");

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const bcrypt = require("bcrypt");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string().min(3),
  lastName: zod.string().min(3),
  password: zod.string().min(6),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message:
        "Incorrect inputs! FirstName & LastName should be 3 & password should be length of 6.",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "User with email exists",
    });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    username: req.body.username,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
    user: user,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message:
        "Incorrect inputs! Type should be Email & Password must be length of 6.",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
  });

  if (user) {
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        JWT_SECRET
      );

      return res.json({
        token: token,
        user: user,
      });
    }
  }

  res.status(411).json({
    message: "Invalid Email or Password!",
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/update-user", authMiddleware, async (req, res) => {
  const { success, data } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  if (data.password) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.userId,
    { $set: data },
    { new: true }
  );

  res.json({
    message: "Updated successfully",
    user: updatedUser,
  });
});

router.get("/user-details", authMiddleware, async (req, res) => {
  try {
    const currentUser = await User.findById(req.userId);
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const account = await Account.findOne({ userId: currentUser._id });
    const userDetails = {
      username: currentUser.username,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      _id: currentUser._id,
      balance: account ? account.balance : 0,
    };

    res.status(200).json(userDetails);
  } catch (error) {
    console.error("Error retrieving user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    await User.findByIdAndDelete(userId);
    await Account.findOneAndDelete({ userId });

    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Error deleting user account:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/bulk", async (req, res) => {
  const getToken = () => {
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      return token;
    }
  };

  try {
    const filter = req.query.filter || "";
    const token = getToken();
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    const users = await User.find({
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } },
      ],
    });

    const usersWithBalance = await Promise.all(
      users.map(async (user) => {
        const account = await Account.findOne({ userId: user._id });
        return {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          _id: user._id,
          balance: account ? account.balance : 0,
        };
      })
    );

    res.json({ users: usersWithBalance });
  } catch (error) {
    console.error("Error while fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
