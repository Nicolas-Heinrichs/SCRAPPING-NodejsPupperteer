
const data = require('./models/webscraping')
const mongoose = require('mongoose')

const dbConnect = async () => {
  await require('./models/dbConfig')

}
dbConnect()

data.then((data) => {
  const schema = new mongoose.Schema({ name: 'string', desc: 'string', img: 'string' });
  const model = mongoose.model('muschroom', schema);
  console.log(data);
  data.forEach(element => {
    const dataMuschrooms = new model(element);
    dataMuschrooms.save().then(() => console.log('data send'))
  });

})


