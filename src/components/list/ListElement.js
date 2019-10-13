import React from "react";
import { Link } from "react-router-dom";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const ListElement = props => {
  //here will be placed map

  const post = props.data[parseInt(props.match.params.number, 10)];
  console.log(post, "ListElement");
  if (!post) {
    return <div>Sorry, but the post was not found</div>;
  }
  const { description, mail, name, phone } = post;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{mail}</p>
      <p>{phone}</p>
      <Link to="/list">Back</Link>
    </div>
  );
};

export default ListElement;
