const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  csrfFrontend: { type: String, required: true },
  frontend: { type: String, required: true },
  pageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Post", postSchema);
