import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Book from "./routes/book/book";
import SingleBook from "./routes/book/singleBook";
import CreateBook from "./routes/book/createBook";
import EditBook from "./routes/book/editBook";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/books" element={ <Book/> } />
          <Route path="/books/:slug" element={ <SingleBook/> } />
          <Route path="/createbook" element={ <CreateBook/> } />
          <Route path="/editbook/:slug" element={ <EditBook/> } />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App