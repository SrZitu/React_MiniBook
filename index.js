import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//stateless functional component
//always return jsx

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
//three argument element, propsObject, children
//function Greeting() {
// return React.createElement("div", {}, "Hello world");
//}
const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};
const CoverImage = () => (
  <img src="https://m.media-amazon.com/images/I/71dUEXcxJzL._AC_UY218_.jpg" />
);

const Title = () => (
  <h1 style={{ fontSize: "2rem", color: "#9bf6ff" }}>
    The Old Man and The Sea
  </h1>
);
const authorStyle = {
  letterSpacing: "5px",
  color: "#bdb2ff",
};
const Author = () => <p style={authorStyle}> by Ernest Hemingway </p>;

ReactDom.render(<Books />, document.getElementById("root"));
