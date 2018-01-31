import React, { Component } from 'react';
import {Navbar, Jumbotron, Button, PanelGroup, Panel} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{

  render(){
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

		<button className = 'btn-primary'>Add</button>
		<button className = 'btn-danger'>Delete</button>



      </div> //end of render return div
      

      )
  }


} //ends App class extension

export default App;
