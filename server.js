// Express Server 
var morgan = require('morgan')

var express = require('express');
var app = express();

// this.stockRoutes = require('./routes'),

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));


// app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('dist/index.html');
// });


// // Routes
// // Get Users
// app.get("/users", (req, res, next) => {
//    console.log("Server > GET '/users' ");
//    User.find({}, (err, users)=>{
//        return res.json(users);
//    })
// })
// // Create User
// app.post("/users", (req, res, next) => {
//     console.log("Server > POST '/users' > user ", req.body);
//     delete req.body._id
//     User.create(req.body, (err, user)=>{
//         if (err) return res.json(err)
//         else return res.json(user)
//     })
// })
// // Destroy User
// app.delete("/users/:id", (req, res, next) => {
//     console.log("Server > DELETE '/users/:id' > id ", req.params.id);
//     User.deleteOne({_id:req.params.id}, (err, rawData)=>{
//         if (err) return res.json(err)
//         else return res.json(true)
//     })
// })
// app.put("/users/:id", (req, res, next) => {
//     console.log("Server > PUT '/users/:id' > id ", req.params.id);
//     console.log("Server > PUT '/users/:id' > user ", req.body);
//     User.update({_id:req.params.id}, req.body, (err, rawData)=>{
//         if (err) return res.json(err)
//         else return res.json(true)
//     })
//     
// })

// app.post('/StockTicker', function (req, res) {
//     stockRoutes.stockTicker(req, res)
// })
// app.post('/calculateReturn', function (req, res) {
//     stockRoutes.calculateReturn(req, res)
// })
// app.post('/calculateReturnDetails', function (req, res) {
//     stockRoutes.spCalculateReturnDetails(req, res)
// })


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
