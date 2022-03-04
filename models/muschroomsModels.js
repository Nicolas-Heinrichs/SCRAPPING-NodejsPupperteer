const mongoose = require('mongoose')
const schema = new mongoose.Schema({ name: 'string', desc: 'string', img: 'string' });
const model = mongoose.model('muschroom', schema);

module.exports = model;