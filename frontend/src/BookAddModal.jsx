import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ApiService from './ApiService';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const currentYear = new Date().getFullYear();
const years = Array.from(new Array(currentYear - 1900 + 1), (val, index) => currentYear - index);

const BookAddModal = ({ fetchData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });

  const handleChange = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await ApiService.postData(bookInfo);
    fetchData();
    handleClose();
  };

  const handleClose = () => {
    setBookInfo({
      title: "",
      author: "",
      ISBN: "",
      genre: "",
      publicationYear: "",
      image: "",
    });
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained" color="success"
        sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
        onClick={handleOpen}
      >
        KİTAP EKLE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
          <FormControl variant="outlined" required>
            <InputLabel id="publicationYear-label">Yayın Yılı</InputLabel>
            <Select
              labelId="publicationYear-label"
              id="publicationYear"
              name="publicationYear"
              value={bookInfo.publicationYear}
              onChange={handleChange}
              label="Yayın Yılı"
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            KAYDET
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BookAddModal;
