const mongoose =require('mongoose');
const model = ( collectionName, schema ) => {
  return mongoose.model( collectionName, schema )
}

module.exports = model