const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
var bodyParser = require("body-parser");

const app = express();

const SELECT_TEST_TABLE = "select * from tbl_sphinx_data";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const SELECT_PARFUMES_STATE =
  "select * from tbl_shop_items as tsi join tbl_shops as ts on tsi.shop_id=ts.shop_id join tbl_collections as tc on ts.shop_id=tc.shop_id ORDER BY `item_id` ASC";

const connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "vnsOi2CfGH",
  password: "AcNPHyPALJ",
  database: "vnsOi2CfGH"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

console.log(connection);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hellooooo");
});

app.post("/parfumes/add", (req, res) => {
  console.log(req.body);
  const { idx } = req.body;
  const WORKING_INSERT_PARFUMES_QUERY = `INSERT INTO tbl_sphinx_data (sphinx_idx, update_time) VALUES('${idx}', NOW() )`;
  connection.query(WORKING_INSERT_PARFUMES_QUERY, idx, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("SUCCESS");
    }
  });
});

app.get("/parfumes", (req, res) => {
  connection.query(SELECT_TEST_TABLE, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        parfumes: results
      });
    }
  });
});

app.delete("/parfumes/:id", (req, res) => {
  console.log(req.params.id);
  const sphinx_idx = req.params.id;
  const DELETE_ID_FROM_DATABASE = `DELETE FROM tbl_sphinx_data WHERE sphinx_idx = '${sphinx_idx}'`;

  connection.query(DELETE_ID_FROM_DATABASE, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Success" + result);
    }
  });
});

// app.get("/parfumes", (req, res) => {
//   connection.query(SELECT_PARFUMES_STATE, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json({
//         parfumes: results
//       });
//     }
//   });
// });

app.listen(4000, () => {
  console.log(`Products server listening on port 4000`);
});
