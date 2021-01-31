import React from "react";
const BookItem = (props) => {
    // console.log("props:");
    // console.log(props);
    const { book, removeBook, addBookToCart} = props;
    return (

        <div  className="card" style={{height:600}}>
            <img src={book.imageCover} alt="" className="card-img-top img-thumbnail" />
            <div className="card-body d-flex flex-column"  style={{maxHeight:100}}>
                <h5>{book.name}</h5>
                <button className="btn btn-outline-warning mt-auto mb-2" onClick={
                    addBookToCart.bind(null, book)
                }>Buy</button>
                <button onClick={
                    removeBook.bind(null, book)
                } type="button" className="btn btn-outline-primary mt-auto mb-2" >Delete</button>
            </div>
        </div>
    );
};
export default BookItem;

