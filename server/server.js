const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
var bodyParser = require('body-parser');

const app = express();

const SELECT_TEST_TABLE = 'select * from tbl_sphinx_data';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const SELECT_PARFUMES_STATE =
  'select * from tbl_shop_items as tsi join tbl_shops as ts on tsi.shop_id=ts.shop_id join tbl_collections as tc on ts.shop_id=tc.shop_id ORDER BY `item_id` ASC';

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'vnsOi2CfGH',
  password: 'AcNPHyPALJ',
  database: 'vnsOi2CfGH',
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

console.log(connection);

app.use(cors());

app.post('/parfumes/add', (req, res) => {
  console.log(req.body);
  const { idx } = req.body;
  const WORKING_INSERT_PARFUMES_QUERY = `INSERT INTO tbl_sphinx_data (sphinx_idx, update_time) VALUES('${idx}', NOW() )`;
  connection.query(
    WORKING_INSERT_PARFUMES_QUERY,
    idx,
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send('SUCCESS');
      }
    },
  );
});

app.get('/parfumes', (req, res) => {
  connection.query(SELECT_PARFUMES_STATE, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        parfumes: results,
      });
    }
  });
});

// DELETE TEST
app.delete('/parfumes/:id', (req, res) => {
  console.log(req.params.id);
  const sphinx_idx = req.params.id;
  const DELETE_ID_FROM_DATABASE =
    'DELETE FROM tbl_sphinx_data WHERE sphinx_idx = ?';

  connection.query(
    DELETE_ID_FROM_DATABASE,
    sphinx_idx,
    (err, result) => {
      if (err) {
        return res.send(err + result);
      } else {
        return res.send('SUCCESS FROM SQL' + result);
      }
    },
  );
});

// `UPDATE tbl_sphinx_data SET sphinx_idx = 'Canyon 123' WHERE address = '${sphinx_idx}'`;

app.put('/parfumes/:id/:content', (req, res) => {
  console.log(req.params.id);
  const current_sphinx_idx = req.params.id;
  const new_sphinx_idx = req.params.content;
  const UPDATE_ITEM_ON_DATABASE = `UPDATE tbl_sphinx_data SET sphinx_idx ='${new_sphinx_idx}' WHERE sphinx_idx = '${current_sphinx_idx}'`;

  connection.query(
    UPDATE_ITEM_ON_DATABASE,

    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send('Success' + result);
      }
    },
  );
});

//-------------- ADMIN ----------------

const SELECT_ALL_PERFUMES =
  'select * from tbl_shop_items ORDER BY `item_id` ASC';

app.get('/admin/list-perfumes', (req, res) => {
  connection.query(SELECT_ALL_PERFUMES, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        parfumes: results,
      });
    }
  });
});

const SELECT_ALL_NOTES =
  'select * from tbl_perfume_notes ORDER BY `name` ASC';

app.get('/admin/list-notes', (req, res) => {
  connection.query(SELECT_ALL_NOTES, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        parfumes: results,
      });
    }
  });
});

app.post('/admin/add-perfume', (req, res) => {
  console.log('insert: ' + req.body);
  const {
    name,
    brand,
    man_address,
    base_note_id,
    heart_note_id,
    top_note_id,
  } = req.body;
  const INSERT_PERFUME_QUERY = `INSERT INTO tbl_shop_items (name, brand, man_address, base_note_id,
    heart_note_id,
    top_note_id) VALUES('${name}','${brand}','${man_address}','${base_note_id}','${heart_note_id}','${top_note_id}')`; //INSERT INTO tbl_sphinx_data (sphinx_idx, update_time) VALUES('${idx}', NOW() )`;
  connection.query(
    INSERT_PERFUME_QUERY,

    (err, result) => {
      if (err) {
        console.log('insert: ' + err);
        return res.send(err);
      } else {
        console.log('insert: success');

        return res.send('SUCCESS');
      }
    },
  );
});

app.put('/admin/update-perfume', (req, res) => {
  console.log('UPDATE ' + req.body);
  const { item_id, name, brand, man_address } = req.body;

  const UPDATE_PERFUME_QUERY = `UPDATE tbl_shop_items SET name ='${name}', brand ='${brand}', man_address ='${man_address}' WHERE item_id = '${item_id}'`;
  console.log('UPDATE ' + UPDATE_PERFUME_QUERY);
  connection.query(
    UPDATE_PARFUME_QUERY,

    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send('Success' + result);
      }
    },
  );
});

app.delete('/admin/delete-perfume/:id', (req, res) => {
  console.log(req.params.id);
  const item_id = req.params.id;
  const DELETE_PARFUME_QUERY = `DELETE FROM tbl_shop_items WHERE item_id = '${item_id}'`;

  connection.query(DELETE_PARFUME_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('Success' + result);
    }
  });
});

app.listen(4000, () => {
  console.log(`Products server listening on port 4000`);
});
