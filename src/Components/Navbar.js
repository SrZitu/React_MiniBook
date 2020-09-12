import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book Reading List</h1>
      <p>Number {books.length} books are remainig in stock now. </p>
    </div>
  );
};

export default Navbar;
