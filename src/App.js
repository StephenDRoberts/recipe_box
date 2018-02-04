import React, { Component } from 'react';
import {Button, PanelGroup, Panel, Modal, Tooltip, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';



class Recipe extends React.Component{

remove(){
	this.props.deleteButton(this.props.index)
}
	
renderNormal(){
	//below allows to run through array of ingredients and show each in own bullet
	var listItems = this.props.ingredients.map(function(data,i){
		return (<li>{data}</li>)
	})

	return(

      <div className = 'recipe'>
		<PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
		  <Panel eventKey="1">
		
		    <Panel.Heading>
		      <Panel.Title toggle>{this.props.title}</Panel.Title>
		    </Panel.Heading>		
			
			<Panel.Body collapsible>
				<ul>
					{listItems}
				</ul>
				<Button className = 'btn-info' >Edit</Button>
				<Button className = 'btn-danger' onClick={this.remove.bind(this)}>Delete</Button>
		    </Panel.Body>			
		  
		  </Panel>

		</PanelGroup>

		
	</div>
		)
	}


	render(){
		return this.renderNormal();	
	}		
		
}


class App extends React.Component{

constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

	this.handleChangeTitle = this.handleChangeTitle.bind(this);
	this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
//	this.submit = this.submit.bind(this);
	this.removeRecipe = this.removeRecipe.bind(this);
	

    this.state = {
      show: false,
      valueTitle: '',
      valueIngredients: '',
      //uses sessionStorage to remember update state
      //need to use JSON.parse as otherwise setItem turns recipes into 
      // an object of strings
      recipes: JSON.parse(sessionStorage.getItem('recipes')) ||
      			[
				{title: 'Welsh Rarebit',
				ingredients: ['bread', 'cheese', 'flour']},
				{title: 'Bara Brith',
				ingredients: ['flour', 'eggs', 'sultanas', 'treacle', 'tea']}
      ],


    }; //end of setting state
	

  }




handleClose() {
    this.setState({ show: false });
}

handleShow() {
    this.setState({ show: true });
}

handleChangeTitle(e) {
    this.setState({ valueTitle: e.target.value });
}

handleChangeIngredients(e) {
    this.setState({ valueIngredients: e.target.value });
}

removeRecipe(i){
	
	var list = this.state.recipes;
	list.splice(i, 1)
	this.onSetResult('recipes', list)
	this.setState({recipes: list})
}


onSetResult(data, newData){
	
	sessionStorage.setItem(data, JSON.stringify(newData))
}

submit(){
	
	var list = this.state.recipes;
	var newTitle = this.state.valueTitle;
	var newIngredients = this.state.valueIngredients.split(',');
	list.push({title: newTitle, ingredients: newIngredients});
	
	this.onSetResult('recipes', list)
	this.setState({recipes: list})
	
	this.handleClose()
}
  
renderList(){
	console.log(this.state.recipes)

	return(
	<div>
		<div className = 'recipeList'>
			{this.state.recipes.map(function(data, i){
				return(<Recipe key={i} index={i} title={data.title} ingredients={data.ingredients} data={data} deleteButton={this.removeRecipe} ></Recipe>);
			},this)}
		</div>
			<Button className = 'btn-primary' onClick={this.handleShow}>Add</Button>			

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
			            //value={this.state.valueTitle}
			            placeholder="Enter recipe title"
			            ref = 'newTitle'
			            onChange={this.handleChangeTitle}
			          />

			          <ControlLabel>Ingredients</ControlLabel>
			          
			          <FormControl
			            type="text"
			         //   value={this.state.valueIngredients}
			            placeholder="Enter ingredients"
			            ref = 'newIngredients'
			            onChange={this.handleChangeIngredients}
			          />		          
			         
			        </FormGroup>
			      </form>
	            
	            <p>
	              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
	            </p>
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleClose}>Close</Button>
	            <Button className='btn-primary' onClick={this.submit.bind(this)}>Submit</Button>
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
