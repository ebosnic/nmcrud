const express = require('express')
const mongoose = require('mongoose')
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express()


// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// define api endpoint
app.get('/', (req,res) => {
	res.send("Hello from node API updated");	
});

//Routes

app.use("/api/products", productRoute);




// Connect to MongoDB
mongoose.connect("mongodb+srv://dbusernamegoeshere:dbpasswordgoeshere@yourclusterendpointgoesherecluster.ftvhewc.mongodb.net/?retryWrites=true&w=majority&appName=clusternamegoeshere")
.then(() => {
	console.log("Connected to the DataBase");
// start the server
	app.listen(3000, () => {
	console.log('Server is running on port 3k');
});
})
.catch((err) => {
	console.log("Error connecting to the DataBase:", err);
});
