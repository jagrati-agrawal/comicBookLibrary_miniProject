const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/new-project')
//     .then(()=>{
//         console.log('DB conected!')
//     })

const horrorSchema = new mongoose.Schema({
    name: String,
    image: String,
    link:String,
})
const Horror = mongoose.model('Horror',horrorSchema);

module.exports = Horror;