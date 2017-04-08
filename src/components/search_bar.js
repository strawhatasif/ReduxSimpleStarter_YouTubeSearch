//Some ES6 - if we place Component (part of React) in curly braces
//it is the same as declaring a variable called Component.
import React, { Component } from 'react';

//declare a new JS class called SearchBar
//we can now refer to Component since it is imported above.

//Class based component - because it cares about state
class SearchBar extends Component
{
    //constructor called all the time when you instantiate class
    //good for setting up variables and state
    constructor(props)
    {
        super(props);
        
        //we want to record the search term to term
        //initializing it as an empty string
        
        //YOU CAN ONLY SET STATE LIKE THIS IN THE CONSTRUCTOR.
        //everywhere else, we set state using the setState method
        //(informs React that the state has changed)
        this.state = { term: '' };
    }
    render() 
    {
        //arrow function assigned to log events in the console
        //for each event, set the state of term to the new value
        
        //value is defined as the value assigned to term. if term is        
        //initially set to 'hello' that is what will show in the input box.

        return (
        <div>
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    
    onInputChange(term) 
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//this allows other components/files to access SearchBar
export default SearchBar;