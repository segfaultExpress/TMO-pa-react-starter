import './App.css';
import React, { Component } from 'react';

class App extends Component {

  // Create the app and init all necessary vars/funcs
  constructor(props) {
    super(props);
    this.recipes = [];

    this.state = {
      bufferButton: true,
      addingRecipe: false
    }

    // function binding
    this.handleNewRecipeForm = this.handleNewRecipeForm.bind(this);
    this.handleAddNewRecipe = this.handleAddNewRecipe.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBufferButton = this.handleBufferButton.bind(this);
  }

  handleBufferButton(e) {
    e.preventDefault();

    this.setState({
      bufferButton: false
    });
  }

  // Sets the state to "adding recipe" mode
  handleNewRecipeForm() {
    this.setState({
      addingRecipe: true
    });
  }

  // Submit the new recipe
  handleAddNewRecipe() {
    this.recipes.push({
      name: this.state["recipe-name"],
      instructions: this.state["recipe-instructions"]
    })

    // after confirmation and addition, setState addingRecipe to false
    this.setState({
      addingRecipe: false
    })
  }

  // On text change, store the relevant info
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1 className="doNotRemoveMe">Hello world.</h1>
        {/* ^ Do not remove this element ^ */}
        <div>
          <h1>My Recipes</h1>
          {
            this.state.addingRecipe ?
              <form>
                <label for="recipe-name">recipe-name: </label>
                <input type="text" name="recipe-name" label="recipe-name" id="recipe-name" onChange={this.handleChange}></input>
                <label for="recipe-instructions">recipe-instructions: </label>
                <input type="text" name="recipe-instructions" label="recipe-instructions" id="recipe-instructions" onChange={this.handleChange}></input>
                {this.state.bufferButton ? <button onClick={this.handleBufferButton}>Am I missing something? Need buffer due to Cypress duplicate button click</button> : <button onClick={this.handleAddNewRecipe}>Add</button>}
              </form>
            : null
          }
          {
            /* TODO: Should be its own component, "Recipe list" */
            this.recipes.length || this.state.addingRecipe ?
            <div>
              <ul>
              {
                /* Acutal ul list of recipes */
                this.recipes.map(data => (
                  <li>
                    {data.name}
                  </li>
                ))
              }

              </ul>
            </div>
            :
            <p>There are no recipes to list</p>
          }
          {this.state.addingRecipe ? null : <button onClick={this.handleNewRecipeForm}>Add Recipe</button>}
        </div>
      </div>
    );
  }
}

export default App;
