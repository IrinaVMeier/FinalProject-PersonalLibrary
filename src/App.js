import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import WishList from './components/WishList';
import ReadBooks from './components/ReadBooks';
import BookPage from './components/BookPage';
import EditBook from './components/EditBook';

function App() {
  return <Routes>
    <Route path="/" element={<WishList />}/>
    <Route path="/readbooks" element={<ReadBooks />}/>
    <Route path="/book/:bookid" /*render={(props) => <BookPage {...props}/>}*/ element={<BookPage />} />
    <Route path="/editbook/:bookid" /*render={(props) => <BookPage {...props}/>}*/ element={<EditBook />} />
  </Routes>

  /*(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
