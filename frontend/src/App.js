import { useEffect, useState } from 'react';
import './App.css';
import BookAddModal from './BookAddModal';
import BookCard from './BookCard';
import axios from 'axios'

function App() {

  const [books, setBooks] = useState([]);

  const getData = async () => {
    try {
      const response = await axios("http://127.0.0.1:8000/books");
      setBooks(response.data.result.rows)
      console.log(response.data.result.rows);
    } catch (error) {
        console.log(error)
    }
  };

  const delData = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/books/${id}`);
      getData()
    } catch (error) {
        console.log(error)
    }
  };

  const postData = async (data) => {
    try {

      await axios.post(`http://127.0.0.1:8000/books/`, data)
      getData()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
      <header style={{textAlign: "center", marginTop:"3rem", color:"purple", fontSize:"1.5rem"}}>
        <h1>YKSL LIBRARY</h1>
      </header>
      <BookAddModal postData={postData}/>
      <BookCard getData={getData} delData={delData} books={books} />
    </div>
  );
}

export default App;
