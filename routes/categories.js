const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategorysUpdated,
  sendCategoriesDeleted,
} = require("../controllers/categories");
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../middlewares/categories");
const { checkAuth } = require("../middlewares/users");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkAuth,
  updateCategory,
  sendCategorysUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoriesDeleted
);

module.exports = categoriesRouter;
