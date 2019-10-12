import React from "react";
import { Link } from "react-router-dom";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const ListElement = props => {
    const user = props.data[parseInt(props.match.params.number, 10)];
    if (!user) {
        return <div>Sorry, but the user was not found</div>;
    }
    return (
        <div>
            <h1>
                {user.name.first}
      </h1>
            <h2>Position: {user.name.last}</h2>
            <Link to="/list">Back</Link>
        </div>
    );
};

export default ListElement;