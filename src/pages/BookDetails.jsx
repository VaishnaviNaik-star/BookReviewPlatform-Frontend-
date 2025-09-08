import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Card, CardMedia, CardContent, Box, Divider } from "@mui/material";
import ReviewForm from "../components/ReviewForm";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/api/books/${id}`);
    setBook(res.data.book);
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!book) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ display: "flex", mb: 3 }}>
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{ width: 250, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">{book.author}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{book.description}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>Average Rating: {book.avgRating ? book.avgRating.toFixed(1) : 0} ⭐</Typography>
        </CardContent>
      </Card>

      <Typography variant="h6">Reviews</Typography>
      <Divider sx={{ mb: 2 }} />
      {reviews.map(r => (
        <Box key={r._id} sx={{ mb: 2, p: 1, border: "1px solid #ccc", borderRadius: 1 }}>
          <Typography variant="subtitle2">{r.userId.name}</Typography>
          <Typography variant="body2">Rating: {r.rating} ⭐</Typography>
          <Typography>{r.comment}</Typography>
        </Box>
      ))}

      <ReviewForm bookId={id} refreshReviews={fetchData} />
    </Container>
  );
}
