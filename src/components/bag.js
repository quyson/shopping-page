import React from "react";

const Bag = (props) => {
    return (
        <div>
            <h1>Your Bag:</h1>
            <ul>
                {props.bag.map((element, id) => {
                    return(
                        <li>
                            {element.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Bag;