import { useEffect, useState } from 'react';
import './App.css';
import BookAddModal from './BookAddModal';
import BookCard from './BookCard';
import ApiService from './ApiService';

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const data = await ApiService.getData();
    setBooks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header style={{ textAlign: "center", marginTop: "3rem", color: "purple", fontSize: "1.5rem" }}>
        <h1>YKSL LIBRARY</h1>
      </header>
      <BookAddModal fetchData={fetchData} />
      <BookCard books={books} putData={ApiService.putData} fetchData={fetchData} />
    </div>
  );
}

export default App;
