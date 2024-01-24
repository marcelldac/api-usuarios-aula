const express = require("express");
const userService = require("../services/user-service.js");

const userRouter = express.Router();

userRouter.get("/usuarios", userService.read);
userRouter.post("/usuarios", userService.create);
userRouter.put("/usuarios/:id", userService.update);
userRouter.patch("/usuarios/:id", userService.updateOneAttr);
userRouter.delete("/usuarios/:id", userService.remove);

module.exports = userRouter;
