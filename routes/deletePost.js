const router = require('express').Router();
const { Theme, Post } = require('../db/models');

router.post('/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/showposts');
});

module.exports = router;
