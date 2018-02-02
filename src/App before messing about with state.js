import React, { Component } from 'react';
import {Button, PanelGroup, Panel, Modal, Tooltip, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class RecipeTitle extends React.Component{
render(){
	return(
		    <Panel.Heading>
		      <Panel.Title toggle>{this.props.title}</Panel.Title>
		    </Panel.Heading>		
		)
	}
}

class Ingredients extends React.Component{

	render(){
/*		var ingredientList = this.props.ingredients;
		
		var listItems = ingredientList.map((ingredient, i)=>
			<li key={i}>{ingredient}</li>
		);
*/			return(
			    <Panel.Body collapsible>
					<ul>
						{this.props.ingredients}
					</ul>
					<Button className = 'btn-info'>Edit</Button>
					<Button className = 'btn-danger'>Delete</Button>
			    </Panel.Body>			
				)
		}
	}





class Recipe extends React.Component{
	render(){
		return(
      <div className = 'recipe'>
		<PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
		  <Panel eventKey="1">
			<RecipeTitle title = {this.props.title}></RecipeTitle>
			<Ingredients ingredients = {this.props.ingredients}></Ingredients>
		  
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

	this.handleChangeTitle = this.handleChangeTitle.bind(this);
	this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
//	this.submit = this.submit.bind(this);
	

    this.state = {
      show: false,
      valueTitle: '',
      valueIngredients: '',
      recipes: [
				{title: 'Welsh Rarebit',
				ingredients: ['bread', 'cheese', 'flour']},
				{title: 'Bara Brith',
				ingredients: ['flour', 'eggs', 'sultanas', 'treacle', 'tea']}
      ],


      titles: [
				'Welsh Rarebit',
				'Bara Brith',
				'Scones',
				'Welshcakes'
      ],
      ingredients: [
					['Bread', 'cheese', 'butter'],
					['flour', 'eggs', 'sultatnas', 'treacle', 'tea'],
					['flour', 'eggs', 'sultanas'],
					['flour', 'eggs', 'raisings']

      ]
    };
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

eachRecipe(data,i){	
console.log(data)
return (<Recipe key={i} title={data.title} ingredients={data.ingredients}></Recipe>);

}

submit(){



/*	
	var list = this.state.recipes;
	var newTitle = this.refs.newTitle.value;
	var newIngredients = this.refs.newIngredients.value;
	console.log(newTitle +" + "+ newIngredients);
	list.push({title: 'hello', ingredients: 'goodbye'})
*/	this.setState({recipes: list})
	this.handleClose()
}
  
renderList(){
	return(
	<div>
		<div className = 'recipeList'>
			{this.state.recipes.map(this.eachRecipe)}

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
			          //  onChange={this.handleChangeTitle}
			          />

			          <ControlLabel>Ingredients</ControlLabel>
			          
			          <FormControl
			            type="text"
			         //   value={this.state.valueIngredients}
			            placeholder="Enter ingredients"
			            ref = 'newIngredients'
			          //  onChange={this.handleChangeIngredients}
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

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


      </div> //end of render return div
      )
}



  render(){
    return this.renderList();
  }


} //ends App class extension

export default App;
