import React, {Component} from 'react';
import RecipeList from './components/RecipeList';
import NavBar from "./components/NavBar";
import RecipeInput from './components/RecipeInput'

const recipeData = [
    {
        "id": 0,
        "title": "Spaghetti Bolognese",
        "imgSrc": "spaghetti.jpg",
        "ingredients": [
            "carrots, minced beef, salary, tomatoes"
        ],
        "instructions": "boil water, cook noodles, cook sauce, enjoy"
    },
    {
        "id": 1,
        "title": "Milkshake",
        "ingredients": [
            "milk, ice, fruit"
        ],
        "instructions": "mix it baby",
        "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/7/72/Strawberry_milkshake.jpg"
    },
    {
        "id": 2,
        "title": "Avocado Toast",
        "ingredients": [
            "avo, toast"
        ],
        "instructions": "put the avo on the toast",
        "imgSrc": "http://ibakeheshoots.com/wp-content/uploads/2014/08/avocado-1.jpg"
    }
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: recipeData,
            nextRecipeId: 4,
            showForm: false
        };
        this.toggleFormVisibility= this.toggleFormVisibility.bind(this);
        this.addRecipe= this.addRecipe.bind(this);

    }

    toggleFormVisibility() {
        this.setState( (oldState) => {
            return {
                ...this.state,
                showForm: !oldState.showForm
            }
        })
    }

    addRecipe(recipe) {
        this.setState( oldState => ({
            recipes: oldState.recipes.slice().concat(Object.assign({}, recipe, {id: oldState.nextRecipeId})),
            nextRecipeId: oldState.nextRecipeId + 1,
            showForm: false,
        }))
    }

    render() {
        return (
            <div className="App">
                <NavBar onNewRecipe={this.toggleFormVisibility}/>
                <RecipeInput visible={this.state.showForm} onRecipeSave={this.addRecipe}/>
                <RecipeList recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default App;

