import { useEffect, useState } from 'react';
import './App.css';
import BookAddModal from './BookAddModal';
import BookCard from './BookCard';
import ApiService from './ApiService';
import loadingGif from "./assets/loading.gif";
import { CardMedia } from '@mui/material';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true)
    const data = await ApiService.getData();
    setBooks(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CardMedia
            component="img"
            image={loadingGif}
            sx={{
              width: "20rem",
            }}
          />
        </div>
      ) : (
        <>
      <header style={{ textAlign: "center", marginTop: "3rem", color: "purple", fontSize: "1.5rem" }}>
        <h1>YKSL LIBRARY</h1>
      </header>
      <BookAddModal fetchData={fetchData} />
      <BookCard books={books} putData={ApiService.putData} fetchData={fetchData} />
      </>
      )}
    </div>
  );
}

export default App;
