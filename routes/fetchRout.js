const router = require('express').Router();
const { Category, Item } = require('../db/models')

router.get('/', async (req, res) => {
  const response = await Category.findAll({ raw: true });
  res.render('fetch', { titles: response })
})

router.post('/',  async (req, res) => {
  try {
    // req.body - это то, что мы получаем с фронта
    const { nameItems, description, price, cat_id } = req.body;
    const item = await Item.create({ nameItems, description, price, cat_id })
    res.json(item)
    //return res.redirect('/fetch')

  } catch(err) {
      console.log(err);
      return res.redirect('/fetch');
  }
})

module.exports = router;
