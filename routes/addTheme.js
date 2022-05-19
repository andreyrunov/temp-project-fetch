const router = require('express').Router();
const { Theme, Post } = require('../db/models');

// добавляем в БД данные из формы методом get
router.get('/', async (req, res) => {
  try {
    await Post.create(req.query);
    return res.status(200).redirect('/addpost');
  } catch (err) {
    console.log(err);
    return res.redirect('/addpost');
  }
});

module.exports = router;
