import PropTypes from "prop-types";

export default function Recipe({ recipe, setRecipe, setDisplay }) {
    return (
      <div className="recipe-card" key={recipe.id} onClick={() => setRecipe(recipe) & setDisplay(true)}>
        <div className="recipe-image-container">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        </div>
        <h3>{recipe.name}</h3>
      </div>
    );
}

Recipe.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    setRecipe: PropTypes.func.isRequired,
    setDisplay: PropTypes.func.isRequired,
};