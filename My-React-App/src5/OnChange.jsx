import React, {use, useState} from "react";

function OnChange(){
    const [name, setName] = useState("Enter your name");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("visa");
    const [shipping, setShipping] = useState("deliver")

    const handelNameChange = (event) => setName(event.target.value);
    const handelQuantityChange = (event) => setQuantity(event.target.value);
    const handelCommentChange = (event) => setComment(event.target.value);
    const handelPaymentChange = (event) => setPayment(event.target.value)
    const handelShippingChange = (event) => setShipping(event.target.value);


    
    return(
        <>
        <input type="text" value={name} onChange={handelNameChange} />
        <p>Name: {name}</p>
        <br />
        <input type="number" value={quantity} onChange={handelQuantityChange} />
        <p>Quantity: {quantity}</p>
        <br />
        <textarea placeholder="Enter delivery instructions" value={comment} onChange={handelCommentChange}></textarea>
        <p>Comment: {comment}</p>
        <br />
        <select value={payment} onChange={handelPaymentChange}>
            <option value="">Select option</option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            <option value="giftcard">GiftCard</option>
        </select>
        <p>payment method: {payment}</p>
        <br />
        <label>
            <input type="radio" value="pickUp" onChange={handelShippingChange} checked={shipping === "pickUp"} />
            PickUp
        </label>
        <label>
            <input type="radio" value="deliver" onChange={handelShippingChange} checked={shipping === "deliver"}/>
            Deliver
        </label>
        <p>Shipping : {shipping}</p>
        </>
    );
}

export default OnChange