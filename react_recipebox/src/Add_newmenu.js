import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
export class Addnewmenu extends React.Component{

  render(){
    const {newrecipe} = this.props;
    return(
      <Modal
        show = {this.props.show} //show the input form if show=true
        onHide = {this.props.hide} //hide the input form if show=false
       >
         <Modal.Header>
           <Modal.Title id="contained-modal-title-lg"><strong>Add New Menu</strong></Modal.Title>
         </Modal.Header>
         <Modal.Body>
             <FormGroup>
             <ControlLabel>Recipe Name</ControlLabel>
             <FormControl
                      placeholder = "Enter Recipe Name" type="text"
                      value={newrecipe.name}
                      onChange={(event)=>this.props.updatenewrecipe(event.target.value, newrecipe.ingredients, newrecipe.src)}>
             </FormControl>
             <br />
             <ControlLabel>Recipe Ingredients</ControlLabel>
             <FormControl
                       style={{height: '60px'}}
                       placeholder ="Please Enter Ingredients Separated By Commas..."
                       type="textarea" value={newrecipe.ingredients}
                       onChange = {(event)=>this.props.updatenewrecipe(newrecipe.name, event.target.value.split(","), newrecipe.src)}>
             </FormControl>
             <br />
             <ControlLabel>Recipe Image Link</ControlLabel>
             <FormControl
                       style={{height: '60px'}}
                       placeholder="http://p10cdn4static.sharpschool.com/UserFiles/Servers/Server_92393/Image/Food%20Service/chameli_dallas_menu.png"
                       value={newrecipe.src}
                       onChange={(event)=>this.props.updatenewrecipe(newrecipe.name, newrecipe.ingredients, event.target.value)}>
             </FormControl>
           </FormGroup>

         </Modal.Body>
         <Modal.Footer>
           <Button bsStyle="success" onClick={this.props.saverecipeMethod}>Add</Button>
           <Button bsStyle ="danger" onClick={this.props.hide}>Close</Button>
         </Modal.Footer>
         </Modal>
    );
  }
}
