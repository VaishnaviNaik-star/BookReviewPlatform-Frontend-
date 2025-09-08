import React, { useEffect, useState } from "react";
import { Grid, Container, TextField } from "@mui/material";
import BookCard from "../components/BookCard";
import axios from "axios";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://bookreviewplatform-backend-1z1c.onrender.com/api/books").then(res => setBooks(res.data));
  }, []);

  const filteredBooks = books.filter(
    b => b.title.toLowerCase().includes(search.toLowerCase()) ||
         b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <TextField
        label="Search by title or author"
        fullWidth
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Grid container spacing={2} justifyContent="center">
        {filteredBooks.map(book => <BookCard key={book._id} book={book} />)}
      </Grid>
    </Container>
  );
}

