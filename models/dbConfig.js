const mongoose = require('mongoose');
const data = require('./data')
const { mongoURL } = data

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoURL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}





