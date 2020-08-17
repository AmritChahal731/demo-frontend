var express = require('express');
var router = express.Router();
// var sqlConnectionObject = require("../app");
var sqlConnectionObject = require("../sqlconnection");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/asn', function(req, res, next) {
  let sqlQuery = `Select * From `
  res.send('respond with a resource');
});

router.get('/asndetails', function(req, res, next) {
  let sqlQuery = `select ilpn, ilpn_status from project1`
  let query = sqlConnectionObject.query(sqlQuery,(err, result)=>{
    if (err) {console.log(err)}
    else{
      console.log(result)
      res.json(result);
    }
  })
  // res.send('respond with a resource');
});

router.post('/asndetailssearch', function(req, res, next) {
  console.log("inside search api")
  var flag = true;
  let sqlQuery = `select ilpn, ilpn_status from project1`
  if (req.body.ilpn || req.body.asn){
  sqlQuery = sqlQuery + " where"
    if (req.body.ilpn){
      sqlQuery = sqlQuery + ` ilpn = ${req.body.ilpn}`
      if (req.body.asn){
        sqlQuery = sqlQuery + ` or ASN = ${req.body.asn}`
        flag = false;
      }
    }
    if (req.body.asn && flag){
      sqlQuery = sqlQuery + ` ASN = ${req.body.asn}`
    }
  }
  // console.log(sqlQuery)
  let query = sqlConnectionObject.query(sqlQuery,(err, result)=>{
    if (err) {console.log(err)}
    else{
      // console.log(result)
      res.json(result);
    }
  })
  // res.send('respond with a resource');
});

module.exports = router;
