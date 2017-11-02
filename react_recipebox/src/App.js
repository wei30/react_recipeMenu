import React, { Component } from 'react';
import './App.css';
import { Slider } from './Slider';
import { Addnewmenu } from './Add_newmenu';
import { Displaymenu } from './Displaymenu';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      recipes: [
        {name: 'Sponge Cake',
        ingredients: ['Flour, Butter', 'Sugar', 'Egg', 'Baking Powder'],
        src: "https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimage.space.rakuten.co.jp%2Flg01%2F32%2F0000025632%2F47%2Fimg35d5ea60zik1zj.jpeg&twidth=1000&theight=0&qlt=80&res_format=jpg&op=r"},
        {name: 'Sesame Pudding',
        ingredients: ['Packet gelatin', 'Water', 'Sugar', 'Whole Milk', 'Whipping Cream'],
        src: "http://4.bp.blogspot.com/_TQumN7uOhT0/TP4gpsHI3lI/AAAAAAAAIXk/kwfq8mvvEYU/s1600/1.jpg"},
        {name: 'Blueberry Cheesecake',
        ingredients: ['flour', 'oil', 'milk'],
        src: "http://www.willcookforsmiles.com/wp-content/uploads/2016/06/Triple-Berry-Cheesecake-aka-Red-White-and-Blue-Cheesecake-6-from-willcookforsmiles.com_.jpg"},
        {name: 'Macaron',
        ingredients: ['Sugar', 'Almond flour', 'Egg White', 'Cream of Tartar', 'Salt', 'Food Coloring', 'Vanilla'],
        src: "http://mediad.publicbroadcasting.net/p/krcu/files/styles/medium/public/201510/macarons-feature-pic.jpg"},
        {name: 'Portuguese Egg Tart',
        ingredients: ['Egg', 'Sugar', 'Cornflour', 'Milk'],
        src: "https://www.makemytrip.com/travel-guide/media/dg_image/macau/Egg-Tart.jpg"}
      ],
      NewRecipe:
        {name: '',
         ingredients: [],
         src: ''},
      width: window.innerWidth/7.2,
      height: window.innerWidth/9
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.UpdateNewrecipe = this.UpdateNewrecipe.bind(this);
    this.saveNewrecipe = this.saveNewrecipe.bind(this);
    this.changevalue = this.changevalue.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
 }
componentDidMount(){//load the webpage with recipes plus the recipes from the localStorage
  let recipes = JSON.parse(localStorage.getItem('myrecipe')) || this.state.recipes;
  this.setState({recipes});
  window.addEventListener("resize", this.updateDimensions);
}

updateDimensions(){
  if(window.innerWidth <= 480){
    this.setState({
      width: window.innerWidth/5,
      height: window.innerWidth/6
    });
  }else{
    this.setState({
      width: window.innerWidth/7.2,
      height: window.innerWidth/9
    });
  }
}

updatelocalStorage(recipes){ //call this function when delete, change recipes
  localStorage.setItem('myrecipe', JSON.stringify(recipes));
}

changevalue(name, ingredients, src, index){//change the recipes according the right index
  let changerecipes = this.state.recipes.slice();//copy recipes object to another object array
  changerecipes[index].name = name; //change the name of the current recipe in recipes object
  changerecipes[index].ingredients = ingredients; //change the ingredients of the current recipe in recipes object
  changerecipes[index].src = src; //change the image src of the current in recipes object
  this.updatelocalStorage(changerecipes);//update the recipes from the localStorage
  this.setState({
    recipes: changerecipes  //set the changed recipes to replace the old recipes list
  });
}

deleteRecipe(index){//delete menu when delete button clicked
  let newrecipes = this.state.recipes.slice();//make a copy recipes
  newrecipes.splice(index, 1);//delete the exact index
  this.updatelocalStorage(newrecipes);
  this.setState({ //bring back the new display list
    recipes: newrecipes //set the new recipes to replace the old recipes
  });
}

UpdateNewrecipe(name, ingredients, src){//Add the name, ingredients, src to a new recipes
  this.setState({
    NewRecipe:{
      name: name, //add a name to the recipes
      ingredients: ingredients, //add ingredients to the recipes
      src: src //add image src to the recipes
    }
  });
}

saveNewrecipe(){  //After added the name, ingredients, and src to the newrecipe
  let recipes = this.state.recipes.slice(); //copy the odd recipes to a new recipes list
  recipes.push({name: this.state.NewRecipe.name, //add the new recipe to the recipes
                ingredients: this.state.NewRecipe.ingredients,
                src: this.state.NewRecipe.src});
  this.updatelocalStorage(recipes);
  this.setState({
    recipes: recipes //update the recipes
  });
  this.setState({ //reset the newRecipe back to empty recipe to wait for new recipe enter
    NewRecipe:{
      name: '',
      ingredients: [],
      src: ''
    }
  });
  this.closeModal();
}
showModal(){ //add menu pop up when show equal to true
  this.setState({show: true});
}
closeModal(){
  this.setState({show: false}); //close add menu when show equal to false
}

render() {
    return (
      <div id="root">
       <Slider /> {/*making a slider for later*/}
       <div id="title"> {/*header plus with a add menu button */}
         <h1>Create Your Own Menu
           <span className="glyphicon glyphicon-plus-sign" onClick={this.showModal}> {/*add menu clicked to add new menu*/}</span>
           <Addnewmenu show={this.state.show} //bring the show value to Add_newmenu, show=true/false
                        hide={this.closeModal} //bring the function closeModal to Add_newmenu, so child Component can use it
                        newrecipe={this.state.NewRecipe} //bring the NewRecipe to Add_newmenu, so child Component can access it
                        updatenewrecipe={this.UpdateNewrecipe} //When newrecipe update/change, pass the value from child to parent, and save to recipes
                        saverecipeMethod={this.saveNewrecipe} /> {/*//when newrecipe added, save new recipe to parent Component recipes*/}
         </h1>
       </div>
       <br /><br /><br />
       <div> {/*display the menu with picture */}
         <h1 id="title"><strong>Dessert</strong></h1>
         <Displaymenu listOFrecipes={this.state.recipes} //bring the parent recipes to Child Component Displaymenu
                      deleterecipe={this.deleteRecipe} //birng the function deleterecipe to Child Component Displaymenu, after delete button click on specific index
                      Updaterecipe={this.changevalue}  //bring the changeValue function to Displaymenu Child to DisplayEditModal, when recipes at DisplayEditModal change
                      widthimage={this.state.width}
                      heightimage={this.state.height}/>
       </div>
      </div>
    );
  }
}

export default App;
