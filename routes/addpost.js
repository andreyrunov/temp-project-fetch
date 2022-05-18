const router = require('express').Router();
const { Theme, Post } = require('../db/models');

// отрисовка страницы с постами
router.get('/addpost', async (req, res) => {
  const response = await Theme.findAll({ raw: true });
  res.render('addpost', { titles: response });
});

// добавляем в БД данные из формы методом get
router.get('/addTheme', async (req, res) => {
  try {
    await Post.create(req.query);
    return res.status(200).redirect('/addpost');
  } catch (err) {
    console.log(err);
    return res.redirect('/addpost');
  }
});


module.exports = router;
