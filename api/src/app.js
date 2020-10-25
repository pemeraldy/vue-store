const express = require("express");
const cors = require("cors");
const lowDb = require("lowdb");
const { nanoid } = require('nanoid')
const fileSync = require("lowdb/adapters/FileSync");
const bodyParser = require("body-parser");
const _ = require("lodash");

const db = lowDb(new fileSync("store.json"));

db.defaults({ products: [] }).write();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        health: "ok",
    });
});

/**
 *
 *
 * /products?category=adult
 * /products?category=adult,digital
 * /products?category=adult,digital&sort=high_to_low
 */
app.get("/products", (req, res) => {
    let data = [];
    let query = db.get("products");
    console.log(req.query)
    let { category,sort,gender,search } = req.query;
    if (search) {
        query = query.filter((item) => {
            return item.name.toLowerCase().includes(search) || item.brand.includes(search) || item.categories.join(',').includes(search)
        });
    }

    if (category) {
        categories = category.split(",");
        query = query.filter((item) => {
            let intersection = _.intersection(item.categories, categories);
            return intersection.length > 0;
        });
    }

    if (gender) {
        genders = gender.split(",");
        query = query.filter((item) => {
            let intersection = _.intersection(item.genders, genders);
            return intersection.length > 0;
        });
    }

    if (sort) {
        sort = sort.split(",");
        sort = sort[0]; // options are low_to_high, high_to_low
        query = query.sort((a, b) =>
            ["low_to_high"].includes(sort)
                ? a.unit_price - b.unit_price
                : b.unit_price - a.unit_price
        );
    }

    data = query.value();
    return res.json(data);
});

/**Add product**/
app.post("/products", (req, res) => {
    const product = req.body
    db.get('products')
        .push({ id: nanoid(), ...product })
        .write()
    res.json({ success: true })
})

app.get("/products/:id", (req, res) => {
    const data = db
        .get("products")
        .find({ id: req.params.id })
        .value();
    if (data) {
        return res.json(data);
    }
    return res.status(404).send('Page not found');
});

app.get("/categories", (_req, res) => {
    /*Not good for perfomance but works for our scale*/
    const cats = db
        .get("products")
        .map("categories")
        .flatten()
        .uniq()
        .value();
    return res.json(cats);
});

app.post("/payment", (req, res)=>{
    const userDetails = req.body
    db.get('users')
        .push({ id: nanoid(), ...userDetails })
        .write()
    res.json({ success: true })
})


app.get("*", (_, res) => {
    return res.status(404);
});

module.exports = app;

