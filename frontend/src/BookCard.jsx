import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid, Tooltip } from "@mui/material";
import BookEditModal from "./BookEditModal";
import ApiService from './ApiService';

const BookCard = ({ books, fetchData }) => {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Container>
      <Grid container justifyContent="center" gap="1.2rem" margin="1.5rem 0" spacing={2}>
        {books.map((book) => (
          <Card
            sx={{ width: 300, height: 480, padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}
            key={book.id}
          >
            <CardMedia sx={{ height: 250 }} image={book?.image} component="img" />
            <Typography gutterBottom variant="h4" component="div">
              {book.title}
            </Typography>
            <Typography variant="body1" color="purple">
              <span style={{ color: "black" }}>Yazar:</span> {book.author}
            </Typography>
            <Typography variant="body1" color="purple">
              <span style={{ color: "black" }}>Tür:</span> {book.genre}
            </Typography>
            <Typography variant="body1" color="purple">
              <span style={{ color: "black" }}>Yayın Yılı:</span> {book.publicationYear}
            </Typography>
            <Typography variant="body1" color="purple">
              <span style={{ color: "black" }}>ISBN:</span> {book.ISBN}
            </Typography>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Tooltip title="Delete" arrow>
                <DeleteIcon
                  onClick={async() => {
                    await ApiService.delData(book.id);
                    fetchData();
                  }}
                  sx={{ color: "black", "&:hover": { color: "purple", cursor: "pointer" } }}
                />
              </Tooltip>
              <Tooltip title="Edit" arrow>
                <EditIcon
                  sx={{ color: "black", "&:hover": { color: "purple", cursor: "pointer" } }}
                  onClick={() => {
                    setOpen(true);
                    setSelectedBook(book.id);
                  }}
                />
              </Tooltip>
            </CardActions>
            <BookEditModal
              open={open && selectedBook === book.id}
              setOpen={setOpen}
              book={book}
              fetchData={fetchData}
            />
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default BookCard;
