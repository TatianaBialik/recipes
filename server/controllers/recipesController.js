export const getAllRecipes = (req, res) => {
  res.json('/api/recipes/ works');
};

export const getRecipeById = (req, res) => {
  const { id } = req.params;
  res.json(id);
};

export const createRecipe = (req, res) => {
  res.json('it works');
};

export const updateRecipe = (req, res) => {
  const { id } = req.params;
  res.json(id);
};

export const deleteRecipe = (req, res) => {
  const { id } = req.params;
  res.json(id);
};