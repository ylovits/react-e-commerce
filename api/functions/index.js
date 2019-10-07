const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));

// get specific product
app.get("/api/product/:item_id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.item_id);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// get all products
app.get("/api/products", (req, res) => {
  (async () => {
    try {
      let query = db.collection("products");
      let response = [];
      await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            name: doc.data().name,
            MPN: doc.data().MPN,
            description: doc.data().description,
            price: doc.data().price,
            category: doc.data().category,
            imgUrl: doc.data().imgUrl,
            img2Url: doc.data().img2Url,
            img3Url: doc.data().img3Url
          };
          response.push(selectedItem);
        }
        return;
      });
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// get all categories
app.get("/api/categories", (req, res) => {
  (async () => {
    try {
      let query = db.collection("categories");
      let response = [];
      await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            sorting: doc.data().sorting,
            name: doc.data().name,
            columns: doc.data().columns,
            imgUrl: doc.data().imgUrl
          };
          response.push(selectedItem);
        }
        return;
      });
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

app.post("/api/create", (req, res) => {
  (async () => {
    try {
      await db
        .collection("categories")
        .doc("/" + req.body.sorting + "/")
        .create({
          sorting: req.body.sorting,
          name: req.body.name,
          imgUrl: req.body.imgUrl,
          columns: req.body.columns
        });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://let-s-sweat.firebaseio.com"
});

const db = admin.firestore();

exports.app = functions.https.onRequest(app);
