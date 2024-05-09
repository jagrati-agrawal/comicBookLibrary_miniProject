const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const user = require('./models/user');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));


const Book = require('./models/book');

const Horror=require('./models/horror');
const Romance=require('./models/romance');
const Popular=require('./models/popular');
const Fantasy=require("./models/fantasy");
const Comedy=require("./models/comedy");
const Scientific = require('./models/scientific');
app.use(express.json());

// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));
const Library = require('./models/library');
// const seed=require('./seed');
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/new-project')
    .then(()=>{
        console.log('DB conected!')
    })


app.get('/bookapi',async (req,res)=>{
    let books = await Book.find({})
    res.json({books})
 })
 app.get('/explore',async(req,res)=>{
    let books=await Book.find({});
    let fantasy=await Fantasy.find({});
    let popular=await Popular.find({});
    let comedy=await Comedy.find({});
    let horror=await Horror.find({});
    let romance=await Romance.find({});
    let scientific=await Scientific.find({});
    res.render('index',{books,fantasy,popular,comedy,horror,romance,scientific});
 })
 app.get('/fantasy',async(req,res)=>{
   let fantasy=await Fantasy.find({});
   res.render('fantasy',{fantasy});
 })
 app.get('/popular',async(req,res)=>{
  let popular=await Popular.find({});
  res.render('popular',{popular});
})
app.get('/comedy',async(req,res)=>{
  let comedy=await Comedy.find({});
  res.render('comedy',{comedy});
})
app.get('/horror',async(req,res)=>{
  let horror=await Horror.find({});
  res.render('horror',{horror});
})
app.get('/scientific',async(req,res)=>{
  let scientific=await Scientific.find({});
  res.render('scientific',{scientific});
})
app.get('/romance',async(req,res)=>{
  let romance=await Romance.find({});
  res.render('romance',{romance});
}) 
app.get('/edit/:id',async(req,res)=>{
  let {id} = req.params;
  let foundItem = await Library.findOne({ bookId: id });
  if(foundItem){
    let library=await Library.find({});
    res.render('library',{library});
  }
  else{
    let fantasy=await Fantasy.findById(id);
    let popular=await Popular.findById(id);
    let comedy=await Comedy.findById(id);
    let horror=await Horror.findById(id);
    let romance=await Romance.findById(id);
    let scientific=await Scientific.findById(id);
    if(fantasy!=null){
      let bookId=id;
      let image=fantasy.image;
      let name=fantasy.name;
      let link=fantasy.link;
      await Library.create({image,name,link,bookId});
    }
    else if(popular!=null){
      let bookId=id;
      let image=popular.image;
      let name=popular.name;
      let link=popular.link;
      await Library.create({image,name,link,bookId});
    }
    else if(comedy!=null){
      let bookId=id;
      let image=comedy.image;
      let name=comedy.name;
      let link=comedy.link;
      await Library.create({image,name,link,bookId});
    }
    else if(horror!=null){
      let bookId=id;
      let image=horror.image;
      let name=horror.name;
      let link=horror.link;
      await Library.create({image,name,link,bookId});
    }
    else if(romance!=null){
      let bookId=id;
      let image=romance.image;
      let name=romance.name;
      let link=romance.link;
      await Library.create({image,name,link,bookId});
    }
    else if(scientific!=null){
      let bookId=id;
      let image=scientific.image;
      let name=scientific.name;
      let link=scientific.link;
      await Library.create({image,name,link,bookId});
    }
    let library=await Library.find({});
    res.render('library',{library});
  }
  
})
app.delete('/delete/:id/del',async(req,res)=>{
  let {id}= req.params;
  await Library.findByIdAndDelete(id);
  let library=await Library.find({});
  res.render('library',{library});
})

app.get('/library',async (req,res)=>{
  let library=await Library.find({});
  res.render('library',{library});
})



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
app.get('/login',(req,res)=>{
  res.render('login');
})

app.post('/signup', async (req, res) => {
  const data = {
      name: req.body.username,
      password: req.body.password
  }
  // 
  // const userData = await user.insertMany(data);
  // console.log(userData);
  const existingUser = await user.findOne({ name: data.name });
  if (existingUser) {
      res.send("user is already exists.Please try another username");
  }
  else {
      const saltRounds=10;
      
      
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);
      data.password = hashedPassword;

      const userData = await user.insertMany(data);
      console.log(userData);
      res.render('login');
     
  }

});

app.post("/login",async(req,res)=>{
  try{
      const check=await user.findOne({name: req.body.username});
      const currUser=req.body.username;
      if(!check){
          res.send("user not found");
      }

      const isPasswordMatch=await bcrypt.compare(req.body.password,check.password);
      if (isPasswordMatch) {
          res.render("dashboard");
  }
  else{
      req.send("wrong password");
  }

}
catch(err){
  console.error(err.message);
}

})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));