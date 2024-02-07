require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const mongoose = require("mongoose")

// Middleware for cors policy
app.use(cors());
app.use(express.json());

//MongoDb connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGOURL

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        
// Creating a collection of documents
        const bookCollections = client.db("BookInventory").collection("books");
/*--------------------------------------------------POST Method-------------------------------------------------------------------------------*
              POST Method: inserting a book to the db : post method
*---------------------------------------------------------------------------------------------------------------------------------------------*
*/ 
        app.post("/upload-book", async(req,res)=>{
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);
        })

/*-------------------------------------------------GET Method-------------------------------------------------------------------------------*
               GET Method: get all books from database
*-------------------------------------------------------------------------------------------------------------------------------------------*
*/        
        app.get("/all-books", async(req,res)=>{
            const books = bookCollections.find();
            const result = await books.toArray();
            res.send(result);
        })

/*---------------------------------------------PATCH/POST Method------------------------------------------------------------------------*
             >>PATCH/POST Method : Updating the data of the user entered
             >>Upsert usage: Here in MongoDB, the upsert option is a Boolean value. Suppose the value is true and the documents match the specified query filter. In that case, the applied update operation will update the documents. If the value is true and no documents match the condition, this option inserts a new document into the collection.
             >>$set outputs documents that contain all existing fields from the input documents and newly added fields. The $set stage is an alias for $addFields . Both stages are equivalent to a $project stage that explicitly specifies all existing fields in the input documents and adds the new fields.
*---------------------------------------------------------------------------------------------------------------------------------------*
*/
        app.patch("/book/:id",async(req,res)=>{
            // to get the id we use params
            const id = req.params.id;
            const updateBookData = req.body;
            const filter = {_id: new ObjectId(id)};
            const options = {upsert: true};

            const updateDoc = {
                $set: {
                    ...updateBookData
                }
            }
            //update
            const result = await bookCollections.updateOne(filter,updateDoc,options);
            res.send(result);
        })
        
/*-------------------------------------------------Delete Method-------------------------------------------------------------------------------*
               DELETE Method: Delete all books from database
*-------------------------------------------------------------------------------------------------------------------------------------------*
*/ 
        app.delete("/book/:id",async(req,res)=>{
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result =  await bookCollections.deleteOne(filter);
            res.send(result);
        })

/*-------------------------------------------------GET Method-------------------------------------------------------------------------------*
               GET Method: after filtering the data with the desired search by the user
*-------------------------------------------------------------------------------------------------------------------------------------------*
*/
        // Filtering the data
        app.get('/all-books',async(req,res)=>{
            let query = {};
            if(req.query?.category){
                query = {category:req.query.category}
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result);
        })
//*--------------------------------------------------------End of API's--------------------------------------------------------------------*       

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send("Welcome Uttkarsh")
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})