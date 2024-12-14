const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET - Asosiy sahifa
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("index", { posts });
  } catch (err) {
    res.status(500).send("Error fetching posts.");
  }
});

// POST - Yangi post qo'shish
router.post("/add", async (req, res) => {
  try {
    const { csrfFrontend, frontend, pageUrl } = req.body;
    const newPost = new Post({
      csrfFrontend,
      frontend,
      pageUrl,
    });
    await newPost.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error saving post.");
  }
});

// POST - Postni o'chirish
router.post("/delete/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error deleting post.");
  }
});

module.exports = router;
