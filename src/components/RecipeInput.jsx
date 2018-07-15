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
        };

        this.setStateValueByInputName = this.setStateValueByInputName.bind(this)
        this.addBlankIngredient = this.addBlankIngredient.bind(this)
    }

    /**
     * Generic onChange handler for input elements which sets the state property that equals the
     * inputs name to the input string.
     * @param {Event} e
     */
    setStateValueByInputName(e) {
        if (this.state[e.target.name] === undefined) {
            throw ReferenceError('no state val found for input name')
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addBlankIngredient(e) {
        e.preventDefault();
        this.setState((oldState) => {
            const ingredientsCopy = oldState.ingredients.slice();
            ingredientsCopy.push('')
            return {
                ...oldState,
                ingredients: ingredientsCopy
            }
        });
    }

    editIngredient(index, event) {
        const { value } = event.target;
        this.setState( oldState => {
            const ingredientsCopy = oldState.ingredients.slice();
            ingredientsCopy[index] = value;
            return {
                ...oldState,
                ingredients: ingredientsCopy
            }
        })
    }

    render() {
        const {title, instructions, ingredients, imgSrc} = this.state;
        let ingredientInputs = ingredients.map((ing, i) => (
            <div key={`ingredient-row-${i}`}>
                <label>{`${i}. `}</label>
                <input
                    type="text"
                    name={`ingredient-${i}`}
                    autoComplete="off"
                    size={45}
                    value={ing}
                    placeholder="ingredient"
                    onChange={this.editIngredient.bind(this, i)}
                />
            </div>
        ));

        const formContainerStyle = {
            width: "500px",
            margin: "8px auto",
            display: this.props.visible ? 'block' : 'none',
            border: "5px solid darkslategrey",
            padding: "6px",
            borderRadius: "5px"
        };

        return (
            <div className="recipe-form-container" style={formContainerStyle}>
                <form onSubmit={this.props.onRecipeSave}>
                    <div className="recipe-form-title-row" style={{display: "flex"}}>
                        <label style={{paddingRight: "8px"}}>Title</label>
                        <input type="text"
                               value={title}
                               name="title"
                               autoComplete="off"
                               style={{flexGrow: 1}}
                               onChange={this.setStateValueByInputName}/>
                    </div>
                    <div className="recipe-form-instructions-row">
                        <label style={{display: "block"}}>Instructions</label>
                        <textarea
                            rows={10}
                            style={{width: "100%" }}
                            value={instructions}
                            name="instructions"
                            onChange={this.setStateValueByInputName}
                        ></textarea>
                    </div>

                    <div className="recipe-form-insgredients-row">
                        {ingredientInputs}
                        <button onClick={this.addBlankIngredient}>+</button>
                    </div>
                    <div className="recipe-form-img-row" style={{display: "flex"}}>
                        <label style={{paddingRight: "8px"}}>Image Url</label>
                        <input type="text"
                               value={imgSrc}
                               name="imgSrc"
                               autoComplete="off"
                               style={{flexGrow: 1}}
                               onChange={this.setStateValueByInputName}/>
                    </div>
                </form>
            </div>
        );
    }
}