const Post = require("../models/postModel");

exports.addArticle = async (req, res) => {
  console.log(req.body);
  try {
    const { data } = req.body;
    const ndata = JSON.stringify(data);
    const posts = await Post.find();
    const id = posts[posts.length - 1].id * 1 + 1;
    const newPost = await Post.create({ id, data: ndata });
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
  const { id } = req.params;
  const { data } = req.body;

  const ndata = JSON.stringify(data);
  console.log(ndata);
  try {
    const post = await Post.findOneAndUpdate({ id }, { data: ndata });
    res.status(200).json({ status: "success", post });
  } catch (error) {
    res.status(400).json({ status: "Fail", error });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOneAndDelete({ id });
    res.status(200).json({ status: "success", post });
  } catch (error) {
    res.status(400).json({ status: "Fail", error });
  }
};
