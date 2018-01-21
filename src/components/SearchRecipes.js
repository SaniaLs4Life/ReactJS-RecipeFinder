import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRecipes } from '../actions'

class SearchRecipes extends Component {
    constructor(){
        super()

        this.state = {
            ingredients: '',
            dish: ''
        }
    }
    
    onChangeIngredients(e){
        this.setState({
            ingredients:e.target.value
        })
    }
    onChangeDish(e){
        this.setState({
            dish: e.target.value
        })
    }

    search(){
        let { ingredients, dish } = this.state
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.props.setRecipes(json.results)
        })
    }

    


    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl onChange={this.onChangeIngredients.bind(this)} type="text" placeholder="ex. garlic, chicken" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    
                    <FormControl onChange={this.onChangeDish.bind(this)} type="text" placeholder="ex. pizza" />
                </FormGroup>
                {' '}
                <Button onClick={this.search.bind(this)}>Find Recipes</Button>
                    
            </Form>
        );
    }
}

export default connect(null, {setRecipes})(SearchRecipes)