import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeItem from './RecipeItem'

class FavoriteRecipeList extends Component {
    render() {
        return (
            <div>                
                
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <h4 className="link"><Link to='/'>Home</Link></h4>
                <h4>Favorite Recipes</h4>
                {
                    this.props.favoriteRecipes.map((recipe, i) => {
                        return(
                            <RecipeItem 
                            key={i} 
                            recipe={recipe} 
                            favoriteButton={false} />
                        )
                    })
                }
                </div>
          <div className="col-md-2"></div>
        </div>
      </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps,null)(FavoriteRecipeList)