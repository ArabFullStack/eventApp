const mongoose = require('mongoose');
const connectionString = `mongodb+srv://Arab:Redlobster123.@cluster0.3wsaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = function(){
    mongoose.connect(connectionString, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log('database connection successful')
        }
    });
}