const router = require('express').Router();
const { Theme, Post } = require('../db/models');

router.get('/', async (req, res) => {
  const response = await Post.findAll({ raw: true });
  res.render('showposts', { posts: response });
});

module.exports = router;
