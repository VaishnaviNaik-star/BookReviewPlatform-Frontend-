import React, { useState } from "react";
import { Box, TextField, Button, Rating } from "@mui/material";
import axios from "axios";

export default function ReviewForm({ bookId, refreshReviews }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to add a review");

    await axios.post(
      "http://localhost:5000/api/reviews",
      { bookId, rating, comment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setRating(0);
    setComment("");
    refreshReviews();
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
      <TextField
        label="Comment"
        fullWidth
        multiline
        rows={3}
        value={comment}
        onChange={e => setComment(e.target.value)}
        sx={{ mt: 1 }}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1 }}>Submit Review</Button>
    </Box>
  );
}
