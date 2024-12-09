import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import SingleRecipe from "../recipe/SingleRecipe";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [display, setDisplay] = useState(false);

  const getRecipes = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/recipes?limit=100");

    if (!response.ok) {
      setError("Something went wrong");
      setLoading(false);
      return;
    }

    const data = await response.json();
    setRecipes(data.recipes);
    setLoading(false);
    console.log(data.recipes);
  };

  function handleChange(e) {
    const search = e.target.value;
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="search-container">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="search-input"
            onChange={handleChange}
          />
          <FaSearch className="search-icon" />
        </label>
      </div>
      <div className="recipe-container">
        {filteredRecipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            setRecipe={setRecipe}
            setDisplay={setDisplay}
          />
        ))}
      </div>
      {recipe && (
        <div
          className={`single-recipe-container ${display ? "show" : "hidden"}`}
        >
          <SingleRecipe
            recipe={recipe}
            setRecipe={setRecipe}
            setDisplay={setDisplay}
          />
        </div>
      )}
    </>
  );
}
