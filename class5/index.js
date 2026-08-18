const express = require("express");
const app = express();

const packages = require("./data/tour")
app.get("/", (req, res) => {
    res.send("Hello, World");
});

app.get("/packages", (req, res) => {
    const destination = req.query.destination;
    res.json(packages);
});
app.get("/packages/:id", (req, res) => {
    const packageId = parseInt(req.params.id);
    const tourPackage = packages.find((pkg) => pkg.id === packageId);
    res.send(tourPackage);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});