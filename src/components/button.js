import React from "react";

const Button = (props) => {
    return (
        <button onClick={() => {
            props.addBag(props.product)
            props.addTotal(props.product.price)
        }
        }>{props.word}</button>
    )
}

export default Button;