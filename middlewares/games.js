const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  console.log("GET /games");

  const categoryName = req.query["categories.name"];

  // Найти все игры с популяцией категорий и пользователей
  let gamesArray = await games.find({}).populate("categories").populate({
    path: "users",
    select: "-password",
  });

  // Если указано имя категории, фильтровать игры по этой категории
  if (categoryName) {
    gamesArray = gamesArray.filter((game) =>
      game.categories.some((category) => category.name === categoryName)
    );
  }

  req.gamesArray = gamesArray;
  next();
};

const createGame = async (req, res, next) => {
  try {
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error creating game" });
  }
};

const findGameById = async (req, res, next) => {
  try {
    req.game = await games
      .findById(req.params.id)
      .populate("categories")
      .populate({
        path: "users",
        select: "-password",
      });
    next();
  } catch (error) {
    res.status(404).send({ message: "Game not found" });
  }
};

const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    res.status(400).send({ message: "Error updating game" });
  }
};

const deleteGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting game" });
  }
};

module.exports = {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
};
