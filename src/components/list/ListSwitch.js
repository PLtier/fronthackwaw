import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './List'
import ListElement from './ListElement'

// The Roster component matches one of two different routes
// depending on the full pathname



class ListSwitch extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };


    componentDidMount() {
        fetch("https://randomuser.me/api/?inc=name,phone,email,location,id&results=20&noinfo")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                    console.log(this.state.items)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Switch>
                    <Route exact path='/list' render={(props)=><List {...props} data={items}/>} />
                    <Route path='/list/:number' render={(props)=><ListElement {...props} data={items}/>} />
                </Switch>
            );
        }
    }
}



export default ListSwitch