const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/new-project')
//     .then(()=>{
//         console.log('DB conected!')
//     })

const popularSchema = new mongoose.Schema({
    name: String,
    image: String,
    link:String,
})
const Popular = mongoose.model('Popular',popularSchema);

module.exports = Popular;