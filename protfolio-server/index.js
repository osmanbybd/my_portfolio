const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());






const  uri = process.env.DB_URI
// console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


function verifyApiKey(req, res, next) {
  const userKey = req.headers['authorization'];
  if (userKey === process.env.PROJECT_API_KEY) {
    next();
  } else {
    res.status(403).send({ message: 'Invalid API Key' });
  }
}


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const projectsCollection = await client.db('projectsDB').collection('projects')

    

    app.post('/projects', verifyApiKey, async(req , res) =>{
        const query = req.body;
        const result = await projectsCollection.insertOne(query);
        res.send(result)
    })




    app.get('/projects', verifyApiKey,  async(req, res) =>{
        const result = await projectsCollection.find().toArray();
        res.send(result)
    })


    app.get('/projects/:id',  verifyApiKey,  async(req, res) =>{
      const id = req.params.id;
      const projectId = {_id : new ObjectId(id)}
      const result = await projectsCollection.findOne(projectId);
      res.send(result);
    })



    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) =>{
    res.send('Portfolio is running ')
})

app.listen(port, ()=>{
    console.log(`Portfolio  is running port ${port}`)
})