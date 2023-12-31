// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {

  onDelete: 'CASCADE' ,

  through : {
    model : ProductTag,
    unique: false
  },

  as : 'Product_tags'



});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {

  onDelete: 'CASCADE' ,

  through : {
    model : ProductTag,
    unique: false
  },

  as : 'Tag_Products'


});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
