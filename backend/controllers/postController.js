const Post = require("../models/postModel");

exports.addArticle = async (req, res) => {
  console.log(req.body);
  try {
    const { data } = req.body;
    const id = await Post.find().countDocuments();
    const newPost = await Post.create({ id, data });
    res.status(200).json({ status: "success", newPost });
  } catch (error) {
    res.status(400).json({ status: "Fail", error });
    console.log(error);
  }
};

exports.allPost = async (req, res) => {
  console.log(req.body);
  try {
    const listall = await Post.find();
    res.status(200).json({ status: "success", listall });
  } catch (error) {
    res.status(400).json({ status: "Fail", error });
  }
};

exports.getPost = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  try {
    const post = await Post.findOne({ id });
    res.status(200).json({ status: "success", post });
  } catch (error) {
    res.status(400).json({ status: "Fail", error });
  }
};

exports.updatePost = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { data } = req.body;
  try {
    const post = Post.findByIdAndUpdate(id, { data });
    res.status(200).json({ status: "success", post });
  } catch (error) {
    res.status(400).json({ status: "Fail", error });
  }
};
