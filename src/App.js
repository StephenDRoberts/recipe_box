import React, { Component } from 'react';
import {Button, PanelGroup, Panel, Modal, Tooltip, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import logo from './logo.svg';

class Recipe extends React.Component{
	render(){
		return(
      <div className = 'recipe'>
		<PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
		  <Panel eventKey="1">
		    <Panel.Heading>
		      <Panel.Title toggle>{this.props.children}</Panel.Title>
		    </Panel.Heading>
		    <Panel.Body collapsible>
				<ul>
					<li>{this.props.children}</li>

				</ul>
		    </Panel.Body>
		  </Panel>

		</PanelGroup>
	</div>
		)
	}
}


class App extends React.Component{

constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

	this.handleChange = this.handleChange.bind(this);


    this.state = {
      show: false,
      value: '',
      recipes: [
				{title: 'Welsh Rarebit',
				ingredients: 'bread, cheese, flour'},
				{title: 'Bara Brith',
				ingredients: 'flou, eggs, sultanas, treacle, tea'}
      ],


      titles: [
				'Welsh Rarebit',
				'Bara Brith',
				'Scones',
				'Welshcakes'
      ],
      ingredients: [
					'Bread, cheese, butter',
					'flour, eggs, sultatnas, treacle, tea',
					'flour, eggs, sultanas',
					'flour, eggs, raisings'

      ]
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

eachRecipe(text,i){
	return (<Recipe key={i}>{text}</Recipe>);

				
}
  
renderList(){
	return(
	<div>
		<div className = 'recipeList'>
			{this.state.titles.map(this.eachRecipe)}			
		</div>
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
    return this.renderList();
  }


} //ends App class extension

export default App;
