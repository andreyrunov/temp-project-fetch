const router = require('express').Router();
const { Theme, Post } = require('../db/models');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    await Theme.create(req.body);
    return res.redirect('/');
  } catch (err) {
    console.log(err);
    return res.redirect('/');
  }
});

module.exports = router;
