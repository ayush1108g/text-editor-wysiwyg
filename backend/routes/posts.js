const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
router.route("/allPost").get(postController.allPost);

router.route("/addArticle").post(postController.addArticle);

router.route("/getPost/:id").get(postController.getPost);

router.route("/updatePost/:id").put(postController.updatePost);
module.exports = router;
