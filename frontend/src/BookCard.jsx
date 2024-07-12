import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid, Tooltip } from "@mui/material";


const BookCard = ({delData, books}) => {

  return <Container>
    <Grid
        container
        justifyContent="center"
        gap="1.2rem"
        marginTop="1.5rem"
        spacing={2}
      >
        {books.map((book) => (
            <Card
              sx={{
                width: 300,
                padding: "1rem",
                paddingBottom: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              key={book.id}
            >
              <CardMedia
                sx={{ objectFit: "contain" }}
                image={book?.image}
                component="img"
              />
              <Typography gutterBottom variant="h4" component="div">
                {book.title}
              </Typography>
              <Typography variant="body1" color="purple">
                <span style={{color:"black"}}>Yazar:</span> {book.author}
              </Typography>
              <Typography variant="body1" color="purple">
              <span style={{color:"black"}}>Tür:</span> {book.genre}
              </Typography>
              <Typography variant="body1" color="purple">
              <span style={{color:"black"}}>Yayın Yılı:</span> {book.publicationYear}
              </Typography>
              <Typography variant="body1" color="purple">
              <span style={{color:"black"}}>ISBN:</span> {book.ISBN}
              </Typography>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Tooltip title="Delete" arrow>
                  <DeleteIcon
                    onClick={() => {
                         delData(book.id);
                       }}
                    sx={{
                        color: "black",
                        "&:hover": { color: "purple", cursor: "pointer" },
                      }}
                  />
                </Tooltip>
                <Tooltip title="Edit" arrow>
                  <EditIcon
                    sx={{
                        color: "black",
                        "&:hover": { color: "purple", cursor: "pointer" },
                      }}
                    // onClick={() => {
                    //   setOpen(true);
                    //   setSelectedFirm(firm._id);
                    // }}
                  />
                </Tooltip>
              </CardActions>
              {/* <FirmEditModal
                open={open && selectedFirm === firm._id}
                setOpen={setOpen}
                firm={firm}
              /> */}
            </Card>
        ))}
      </Grid>
  </Container>;
};

export default BookCard;
