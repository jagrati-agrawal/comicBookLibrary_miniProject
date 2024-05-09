const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const user = require('./models/user');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => { console.log('DB connected') })
    .catch(() => { console.log('DB not connected') });


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('login');

});


app.get('/signup', (req, res) => {
    res.render('signup');

});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});


app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    const existingUser = await user.findOne({ name: data.name });
    if (existingUser) {
        res.send("user is already exists.Please try another username");
    }
    else {
        
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        const userData = await user.insertMany(data);
        console.log(userData);
       
    }

});
app.post("/login", async (req, res) => {
    try {
      const check = await user.findOne({ name: req.body.username });
      if (!check) {
        res.send("user not found");
      }
  
      const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
      if (!isPasswordMatch) {
        res.send("wrong password");
      } else {
        res.send("login successful");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });




// app.post("/login",async(req,res)=>{
//     try{
//         const check=await user.findOne({name:req.body.username});
//         if(!check){
//             res.send("user not found");
//         }

//         const isPasswordMatch=await bcrypt.compare(req.body.password,check.password);
//         if (!isPasswordMatch) {
//             res.render("home");
//     }
//     else{
//         req.send("wrong password");
//     }

// }
// catch(err){
//     console.error(err.message);
// }

// })



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));