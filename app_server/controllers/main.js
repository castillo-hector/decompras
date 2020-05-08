/* GET home page. */
const index = (req, res) => {
  res.render("index", { title: "Hello, De Compras" });
};

module.exports = {
  index,
};
