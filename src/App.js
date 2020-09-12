import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Contexts/BookContext";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
