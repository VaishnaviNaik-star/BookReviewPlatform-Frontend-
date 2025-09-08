import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Card sx={{ maxWidth: 250, margin: 1 }}>
      <CardMedia
        component="img"
        height="350"
        image={book.image}
        alt={book.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">{book.title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">{book.author}</Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {book.avgRating ? book.avgRating.toFixed(1) : "0"} ⭐
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Button component={Link} to={`/book/${book._id}`} variant="contained" fullWidth>
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
