import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class IngredientList extends Component{


    static propTypes = {
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    render() {

        const { ingredients } = this.props;

        const ingredientListItems = ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));

        return <ul>{ingredientListItems}</ul>
    }
}