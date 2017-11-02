import React from 'react';
import { Modal } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
export class DisplayEditModal extends React.Component{
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.hide}> {/*Edit Form Starts here*/}
        <Modal.Title><strong>Edit Recipe</strong></Modal.Title>
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Recipe Name</ControlLabel>
              <FormControl type="text"
                           placeholder="Enter Your Name"
                           defaultValue={this.props.valueName}
                           onChange={(event)=>this.props.Updaterecipe(event.target.value, this.props.valueIngredient, this.props.valueSrc, this.props.index)}>
              </FormControl>
              <br />
              <ControlLabel>Recipe Ingredients</ControlLabel>
              <FormControl type="textarea"
                           placeholder= "Please Enter Ingredients Separated By Commas..."
                           defaultValue={this.props.valueIngredient}
                           onChange={(event)=>this.props.Updaterecipe(this.props.valueName, event.target.value.split(","), this.props.valueSrc, this.props.index)}>
              </FormControl>
              <br />
              <ControlLabel>Recipe Image Link</ControlLabel>
              <FormControl type="text"
                           placeholder= "image Link"
                           defaultValue={this.props.valueSrc}
                           onChange={(event)=>this.props.Updaterecipe(this.props.valueName, this.props.valueIngredient, event.target.value, this.props.index)}>
              </FormControl>
          </FormGroup>
          <div>
            <Image style={{width: '200px', height: '200px'}} src={this.props.valueSrc}></Image>
            <p>
             <ul>
              {this.props.valueIngredient.map((ingredient, index)=>
                <li key={index}>{ingredient}</li>
              )}
             </ul>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='success' onClick={this.props.hide}>Save Recipe</Button>
        </Modal.Footer>
      </Modal>

    );
  }
}
