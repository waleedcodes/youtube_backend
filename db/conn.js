const mongoose = require('mongoose');

const url = process.env.BACK_URL;
mongoose.set('strictQuery', true);
mongoose.connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log(`Connection Successfully!`)
}).catch((err) => console.log(`no Connection`));