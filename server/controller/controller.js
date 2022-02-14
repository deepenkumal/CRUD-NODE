const UserDB = require("../model/model");

//create and save new user
exports.create = (req, res) => {
  //validate request
  console.log(req.body);
  if (!req.body) {
    console.log("empty");
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  //newuser
  else {
    const user = new UserDB({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    });

    //save user in the database
    user
      .save(user)
      .then((data) => {
        // res.send(data);
        res.redirect('/');
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occur during create operation",
        });
      });
  }
};

//retrive and return all users && retrive and return single user
exports.find = (req, res) => {
  if(req.query.id){
    const id = req.query.id;
    UserDB.findById(id)
    .then((data)=>{
      if(!data){
        res.status(400).send("Data can't found");
      }
      else{
        res.send(data);
      }
    })
    .catch((err)=>{
      res.status(500).send({ message:err.message||'some error occured during fetching data'});
    })

  }


  else{
    
  UserDB.find()
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    res
      .status(500)
      .send({ message: err.message || "Error occured during retrived" });
  });

  }
};

//update user by identified by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send("data cannot be empty");
  }
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(400).send("User not found");
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update user information" });
    });
};

//delete user with the specified user id in the request
exports.delete = (req,res) => {
  const id = req.params.id;
  UserDB.findByIdAndDelete(id)
  .then((data)=>{
    if(!data){
      res.status(404).send(`User is not finded or ${id} may be wrong`);
    }
    else{
      res.send('User data deleted successfully');
    }
  })
  .catch(err=>{
    res.status(500).send({ message:err.message||'couldnot delete user '});
  })
};
