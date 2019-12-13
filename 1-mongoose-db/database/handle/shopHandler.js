const {shopSchema}=require('../schema');
const model=require('../model')
const shopModel=model('shops',shopSchema)
const shops = {
  add () {},
  del () {},
  update () {},
  query () {}
}

module.exports = shops