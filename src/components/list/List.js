import React from 'react';
import { Link } from "react-router-dom";



const List = (props)=>{
    return(
        <div>
            {props.data.map((item,index) => (
            <li key={index}>
                    <Link to={`/list/${index}`}>{item.name}</Link>
            </li>
          ))}
        </div>
    )
}
export default List;