require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const connectDB = require('./db/connect');
const cors = require('cors');


//routes

const userRoutes = require('./routers/userRoutes');


//middlewares
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/v1/users',userRoutes);


app.all('*' , (req,res)=>{
    res.status(404).send('NOT FOUND');
})

//Start-up code
const start = async(url) => {
    try{
        await connectDB(url);
        app.listen(port,()=> console.log(`app is listening at port ${port}`));
    }catch(err){
        console.log(err);
    }
}
start(process.env.MONGO_URI);