import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css'

export default class RecipeList extends Component {

    static propTypes = {
      recipes: PropTypes.arrayOf(Object),
        onRecipeDelete: PropTypes.func
    };

    static defaultProps = {
        recipes: [{
            id: 1,
            title: "Spaghetti Bolognese",
            imgSrc: "spaghetti.jpg",
            ingredients: "carrots, minced beef, salary, tomatoes".split(', '),
            instructions: "boil water, cook noodles, cook sauce, enjoy"
        }]
    };

    render() {
        return (

            <div className="recipe-list">
                {
                    this.props.recipes.map((recipe) => (
                        <Recipe key={recipe.id} {...recipe} onDeleteBtnClick={this.props.onRecipeDelete.bind(this, recipe.id)}
                        />
                    ))
                }
            </div>
        );
    }
}