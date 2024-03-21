const express=require( 'express');
const path=require('path');
const bcrypt=require('bcrypt') ;
const mongoose=require('mongoose');
const user = require('./models/user');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


mongoose.connect('mongodb://127.0.0.1:27017/user')
  .then(() => { console.log('DB connected') })
  .catch(() => { console.log('DB not connected') });


app.set( "view engine", "ejs" );
app.set('views',path.join(__dirname,'views'));
app.use(express.static("public"));



app.get( '/', (req,res)=>{
    res.render('login' );

});

app.get( '/signup', (req,res)=>{
    res.render('signup' );

});
app.get('/signup/home',(req,res)=>{
    res.render('home');
});


app.post('/signup', async(req,res)=>{
    const data= {
        name: req.body.username ,
        password:req.body.password  
    }
    const userData= await user.insertMany(data);
    console.log(userData);
    user.save();
    res.redirect("/home");

});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));