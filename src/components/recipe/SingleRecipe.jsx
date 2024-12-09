import PropTypes from "prop-types";

const SingleRecipe = ({ recipe, setRecipe, setDisplay }) => {
  return (
    <>
      {recipe.name && (
          <div className="single-recipe">
            <div className="close-button" onClick={() => setRecipe({}) & setDisplay(false)}>
              &times;
            </div>
            <div className="single-recipe-image-container">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
            </div>
            <h2>{recipe.name}</h2>
            <h4>Rating: {recipe.rating}</h4>
            <div className="single-recipe-info">
              <h4>Meal Type: <span className="fw-400">{recipe.mealType && recipe.mealType.map((el, i) => <span key={i}>{el}{i < recipe.mealType.length - 1 && ", "}</span>)}</span></h4>
              <h4>Cuisine: <span className="fw-400">{recipe.cuisine}</span></h4>
              <h4>Calories: <span className="fw-400">{recipe.caloriesPerServing}</span></h4>
              <h4>Preparation Time: <span className="fw-400">{recipe.prepTimeMinutes} minutes</span></h4>
            </div>
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Instructions:</h3>
              <ol type="i">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
      )}
    </>
  );
};
export default SingleRecipe;

SingleRecipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    mealType: PropTypes.arrayOf(PropTypes.string),
    cuisine: PropTypes.string,
    caloriesPerServing: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
    prepTimeMinutes: PropTypes.number,
    rating: PropTypes.number
  }).isRequired,
  setRecipe: PropTypes.func.isRequired,
  setDisplay: PropTypes.func.isRequired,
};