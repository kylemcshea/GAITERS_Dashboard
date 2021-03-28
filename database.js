var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://zdwkvtfh:Jc3rLhG14M9TR2U77iz8PX8Lgb-UyHZl@queenie.db.elephantsql.com:5432/zdwkvtfh" 
//Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
});