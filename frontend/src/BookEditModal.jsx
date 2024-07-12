import { Box, Button, Fade, Modal, TextField } from "@mui/material";
import React, { useState } from "react";

const BookEditModal = ({ putData, open, setOpen, book }) => {
  const { title, author, genre, ISBN, publicationYear, image, id } = book;

  const [bookInfo, setBookInfo] = useState({
    title,
    author,
    genre,
    ISBN,
    publicationYear,
    image,
  });

  const handleChange = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putData(id, bookInfo);
    setOpen(false);
  };

  const handleClose = () => {
    setBookInfo({
      title,
      author,
      genre,
      ISBN,
      publicationYear,
      image,
    });
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <TextField
            id="title"
            name="title"
            label="Kitap Adı"
            variant="outlined"
            value={bookInfo.title}
            onChange={handleChange}
            required
          />
          <TextField
            id="author"
            name="author"
            label="Yazar"
            variant="outlined"
            value={bookInfo.author}
            onChange={handleChange}
            required
          />
          <TextField
            id="ISBN"
            name="ISBN"
            label="ISBN"
            variant="outlined"
            value={bookInfo.ISBN}
            onChange={handleChange}
            required
          />
          <TextField
            id="genre"
            name="genre"
            label="Tür"
            variant="outlined"
            value={bookInfo.genre}
            onChange={handleChange}
            required
          />
          <TextField
            id="publicationYear"
            name="publicationYear"
            label="Yayın Yılı"
            variant="outlined"
            value={bookInfo.publicationYear}
            onChange={handleChange}
            required
          />
          <TextField
            id="image"
            name="image"
            label="Kapak Resmi"
            variant="outlined"
            value={bookInfo.image}
            onChange={handleChange}
            required
            type="url"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "purple",
              "&:hover": {
                color: "purple",
                backgroundColor: "white",
              },
            }}
          >
            GÜNCELLE
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookEditModal;
