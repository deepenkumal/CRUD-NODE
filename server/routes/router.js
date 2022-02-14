const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require('../controller/controller');

/** 
 * @description Root route
 * @method Get
 */
route.get("/", services.homeRoutes);

/** 
 * @description add user route
 * @method Get
 */

route.get("/add-user", services.addUserRoutes);

/** 
 * @description update user route
 * @method Get
 */

route.get("/update-user", services.updateUserRoutes);


//api
route.post('/api/user/',controller.create);
route.get('/api/user/',controller.find);
route.put('/api/user/:id',controller.update);
route.delete('/api/user/:id',controller.delete);



//not found
route.use((req, res) => {
  res.status(404).send("page not found");
});

module.exports = route;
