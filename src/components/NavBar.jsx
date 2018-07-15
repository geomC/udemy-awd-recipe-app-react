import React, {Component} from 'react';
import './NavBar.css'

export default class NavBar extends Component {

    render() {



        return <header className="appHeader">
            <header>
                <h2><a>Recipe App</a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        </header>
    }
}