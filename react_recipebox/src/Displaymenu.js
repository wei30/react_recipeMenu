import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { DisplayEditModal } from './DisplayEditModal.js';

export class Displaymenu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show: false, //declare for show edit box
      recipes:{
        recipesName: '', //declare a variable for recipename when a specific recipe change
        recipesIngrendient:[], //declare a variable for recipe ingredients when a specific recipe's ingredients change
        recipesSrc: '' //declare a variable for recipe source when a specificrecipe's image change
      },
      index: 0 //declare a variable to record the position when a spefific recipe change
    };
    this.showEditModal = this.showEditModal.bind(this);
    this.hideEditModal = this.hideEditModal.bind(this);
  }

  showEditModal(index){ //create a menu form, it will pops up when edit button clicked
    this.setState({
      show: true, //when show equal to true, the edit box shows up
      recipes:{
        recipesName: this.props.listOFrecipes[index].name, //each input value equal the specifc recipe's value
        recipesIngrendient: this.props.listOFrecipes[index].ingredients,
        recipesSrc: this.props.listOFrecipes[index].src
     },
     index: index //assign index equal the specific recipes, so we update for the parent(original recipes, so it can display correctly)
  });
  }

  hideEditModal(){ //hide the menu form
    this.setState({
      show: false
    });
  }

  imagelink(imagesrc){//if user did not enter an Image link, default link will assign
    return imagesrc.length > 0 ? imagesrc : 'http://p10cdn4static.sharpschool.com/UserFiles/Servers/Server_92393/Image/Food%20Service/chameli_dallas_menu.png';
  }

  imagename(imagename){//if user did not enter a name for recipe, default name will be sample Menu
    return imagename.length > 0 ? imagename : 'Sample Menu';
  }
  render(){
    console.log(this.state.recipes.recipesName);
    console.log(this.props.widthimage);
    console.log(this.props.heightimage);
    const imagestyles = {width: this.props.widthimage, height: this.props.heightimage}

    return (
      <Grid>
       <Row>
        {this.props.listOFrecipes.length > 0 && this.props.listOFrecipes.map((recipe, index)=>
             <Col key= {index} xs={6} md={4}>
              <br /><br />
              <h4 key={index}><strong>{this.imagename(recipe.name)}</strong></h4>
              <Thumbnail style={imagestyles} src={this.imagelink(recipe.src)}/>
              <span className="glyphicon glyphicon-edit icon" onClick={(event)=>this.showEditModal(index)} >
                <DisplayEditModal show={this.state.show} //show the edit menu form
                                  hide={this.hideEditModal} //close the edit menu form
                                  index={this.state.index} //bring index to DisplayEditModal so it can update the specific recipe
                                  valueName={this.state.recipes.recipesName} //bring the update recipe Name for the value of the input
                                  valueIngredient={this.state.recipes.recipesIngrendient} //bring the update recipe ingredients for the value of the input
                                  valueSrc={this.state.recipes.recipesSrc}  //bring the update recipe src for the value of the input
                                  Updaterecipe = {this.props.Updaterecipe} /> {/* bring the function from parent Component to child Component DisplayEditModal to update the changes*/}

              </span>
              <span className="glyphicon glyphicon-trash icon" onClick={(event)=>this.props.deleterecipe(index)}></span> {/*when delete button clicked, delete specific recipe*/}
             </Col>
        )}
        </Row>
       </Grid>
    );
 }
}
