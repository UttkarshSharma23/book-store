const express = require('express')
const app =  express();
const port = process.env.PORT || 5000
require('dotenv').config()
const cors  = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

//Middleware cors to avoid the cross origin policy
app.use(cors)
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("welcome uttkarsh");
})



// MongoDB configuration
const uri = process.env.MONGOURL

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);




app.listen(port,()=>{
    console.log(`Book Store app is listening on port ${port}`);
})