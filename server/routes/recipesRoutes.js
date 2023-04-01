import express from "express";
import { 
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipesController.js';

const router = express.Router();

router.route('/')
  .get(getAllRecipes)
  .post(createRecipe);

router.route('/:id')
  .get(getRecipeById)
  .put(updateRecipe)
  .delete(deleteRecipe);

export default router;