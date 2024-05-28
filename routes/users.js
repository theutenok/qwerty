const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");
const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  hashPassword,
  checkAuth,
} = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  hashPassword,
  checkAuth,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
