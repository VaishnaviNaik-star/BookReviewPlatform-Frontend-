import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import ReviewForm from "../components/ReviewForm";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `https://bookreviewplatform-backend-1z1c.onrender.com/api/books/${id}`
    );
    setBook(res.data.book);
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!book) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4, mb: 5 }}>
      {/* Book Details Card */}
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          mb: 3,
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{
            width: { xs: "80%", sm: 250 },
            height: "auto",
            objectFit: "cover",
            borderRadius: 2,
            mb: { xs: 2, sm: 0 },
          }}
        />
        <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {book.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {book.author}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {book.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Average Rating:{" "}
            {book.avgRating ? book.avgRating.toFixed(1) : 0} ⭐
          </Typography>
        </CardContent>
      </Card>

      {/* Reviews Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Reviews
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {reviews.length > 0 ? (
        reviews.map((r) => (
          <Paper
            key={r._id}
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {r.userId?.name || "Anonymous"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: {r.rating} ⭐
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {r.comment}
            </Typography>
          </Paper>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No reviews yet. Be the first to review!
        </Typography>
      )}

      {/* Review Form */}
      <ReviewForm bookId={id} refreshReviews={fetchData} />
    </Container>
  );
}



