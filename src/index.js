import React from "react";
import ReactDOM from "react-dom";
import booksData from "./books.js";
import logo from "./logo.svg";

// function Hello() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello</h1>
//       <h2>{booksData[0].name}</h2>
//     </div>
//   );
// }

// ReactDOM.render(<Hello />, document.getElementById("root"));
function Image(props) {
  return <img src={props.src} alt="logo" style={{ width: "150px" }} />;
}
function Header(props) {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1>Книжный магазин</h1>
    </div>
  );
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: booksData,
    };
  }
  removeBook = (book) => {
    const updateBooks = this.state.books.filter(function (item) {
      return item.id != book.id;
    });
    console.log(updateBooks);
    this.setState({
      books: updateBooks,
    });
  };
  render() {
    return (
      <div>
        <Header className="header" />
        {this.state.books.map((book) => {
          //console.log(book.id);
          return (
            <div key={book.id}>
              <p>{book.name}</p>
              <button onClick={this.removeBook.bind(this, book)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
