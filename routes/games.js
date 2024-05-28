const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
  sendGameById,
} = require("../controllers/games");
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
} = require("../middlewares/games");
const { checkAuth } = require("../middlewares/users");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
