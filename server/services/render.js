const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //make a get request to api/user
  axios.get("http://127.0.0.1:3000/api/user").then(function (response) {

    res.render("index", {
      title: "crud application",
      users: response.data,
    });
  });
};

exports.addUserRoutes = (req, res) => {
  res.render("add-user.ejs", { title: "Add new user" });
};

exports.updateUserRoutes = (req, res) => {
  axios.get("http://localhost:3000/update-user", { params: { id: req.query.id }})
    .then((userData) => {
      res.render("update-user", { title: "update-user",userdata:userData.data });
    })
    .catch(err=>{
        res.send(err);
    })
    // res.render("update-user", { title: "update-user"});


};
