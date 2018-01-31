import React, { Component } from 'react';
import {Button, PanelGroup, Panel, Modal, Tooltip, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import logo from './logo.svg';




class App extends React.Component{

constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

	this.handleChange = this.handleChange.bind(this);


    this.state = {
      show: false,
      value: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

getInitialState(){
	return{
		titles: [
				'Welsh Rarebit',
				'Bara Brith',
				'Scones',
				'Welshcakes'
		]

	}
}

	
 

  
renderNormal(){
	return(
      <div className = 'recipeContainer'>
		<PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
		  <Panel eventKey="1">
		    <Panel.Heading>
		      <Panel.Title toggle>Welsh Rarebit</Panel.Title>
		    </Panel.Heading>
		    <Panel.Body collapsible>
				<ul>
					<li>2 tbsp unsalted butter</li>
					<li>2 tbsp all-purpose flour</li>
					<li>1 tsp Dijon mustard</li>
					<li>1 tsp Worcesteshire sauce</li>
					<li>1/2 tsp kosher salt</li>
					<li>1/2 tsp freshly ground black pepper</li>
					<li>1/2 cup beer</li>
					<li>3/4 cup heavy cream</li>
					<li>6 ounces shredded cheddar</li>
					<li>2 drops hot suace</li>
					<li>4 slices toasted rye bread</li>
				</ul>
		    </Panel.Body>
		  </Panel>

		</PanelGroup>

		<Button className = 'btn-primary' onClick={this.handleShow}>Add</Button>
		<Button className = 'btn-danger'>Delete</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
		      <form>
		        <FormGroup
		          controlId="formBasicText"
		         
		        >
		          <ControlLabel>Recipe Title</ControlLabel>
		          
		          <FormControl
		            type="text"
		            value={this.state.recipeTitle}
		            placeholder="Enter recipe title"
		            onChange={this.handleChange}
		          />

		          <ControlLabel>Ingredients</ControlLabel>
		          
		          <FormControl
		            type="text"
		            value={this.state.value}
		            placeholder="Enter ingredients"
		            onChange={this.handleChange}
		          />		          
		         
		        </FormGroup>
		      </form>
            
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div> //end of render return div
      )
}

  render(){
    return this.renderNormal();
  }


} //ends App class extension

export default App;
