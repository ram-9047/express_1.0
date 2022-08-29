const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { getErrorPage } = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(getErrorPage);
// app.use((req, res) => {
//   res.status(404).send(`<h1>Page not Found</h1>`);
// });

// -------port--------
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
