import React, { Component } from 'react';
import './RecipeInput.css'

export default class RecipeInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            imgSrc: ''
        }
    }

    render() {
        const {title, instructions, ingredients, imgSrc} = this.state;
        let ingredientInputs = ingredients.map((ing, i) => (

            >
                <label>`${i}. ingredient`</label>
                <input
                    type="text"
                    name={`ingredient-${i}`}
                    autoComplete="off"
                    size={45}
                    value={ing}
                    placeholder="Enter ingredient"
                    onChange={ing => this.setState({
                            ...this.state,
                            ingredients: ingredients.slice(0, i).concat([ing, ingredients.slice(i)])
                    })}
                />
            </div>
        ));

        return ()
    }
}