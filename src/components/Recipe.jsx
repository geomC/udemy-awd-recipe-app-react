import React, {Component} from 'react';
import IngredientList from './IngredientList'
import PropTypes from 'prop-types'
import './Recipe.css';

export default class Recipe extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    };

    render() {
        const {title, imgSrc, ingredients, instructions} = this.props;
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={imgSrc} alt={`recipe ${title}`}/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipeTitle">{title}</h3>
                    <h4>ingredients:</h4>
                    <IngredientList ingredients={ingredients}/>
                    <h4>instructions:</h4>
                    <p>
                        {instructions}
                    </p>
                </div>

            </div>
        )
    }
}