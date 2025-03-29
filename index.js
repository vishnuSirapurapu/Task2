const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
app.use(express.json());
const Product = require('./Models/product.js')
const Signup  = require('./Models/signup.js')
const Signin = require('./Models/signin.js')

// Adding Products
app.post("/addproducts",async (req,res)=>{
  try {
    const product = await Product.create(req.body);
    res.json(product);
    console.log("Data Inserted");
  }catch(error){
    res.send("Data is not inserted")
  }
});
// Signup
app.post("/signup", async (req, res) => {
  try {
    const signup = await Signup.create(req.body);
    res.json(signup);
    console.log("User Created");
  } catch (error) {
    res.send("User not Created");
  }
});
// Signin 
app.post("/signin",async(req,res)=>{
  try{
    const signin = await Signin.create(req.body);
    res.json(signin);
    console.log("Login Successful");
  }catch(error){
    res.send("Login Unsuccessful");
  }
});
// Get Method
app.get("/getproducts", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
    console.log("Data fetched");
  } catch (error) {
    res.send("Data not fetched");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://Vishnu:vishnu%403022@ecommerce.wur4izw.mongodb.net/")
.then(() =>{
  console.log("Connnected to mongodb");
}).catch((err)=>{
  console.log("Error connecting to mongo db",err);
});