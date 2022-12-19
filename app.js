const express=require("express")
const app=express()
const cors=require("cors")
const port=process.env.PORT||3000
const apidata=require("./app.json")
 
app.use(cors())

app.get("/api",(req,res)=>{
   res.send(apidata)
   
    
})

app.listen(port,()=>{
    console.log("connected")
})