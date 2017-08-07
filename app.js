const app = require('express')();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/:user", function (req, res) {
    const user = req.params.user;
    res.render("logged_in.ejs", {userName: user});
});

app.get("*", function (req, res) {
    res.render("404.ejs");
});

app.listen(3000, function () {
    console.log('legooo.........');
});