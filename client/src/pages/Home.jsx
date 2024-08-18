import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CarouselComponent from "../components/Carousel/CarouselComponent"; // Import the CarouselComponent
import CalendarComponent from "../components/Calendar/Calendar.jsx"; // Import the CalendarComponent

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShopProductsClick = () => {
    navigate("/products"); // Navigate to the Products page
  };

  return (
    <>
      <Container className="container">
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Ghost Events and Gaming!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Trading card store in Denver, Colorado.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={handleShopProductsClick} // Add onClick handler
          >
            SHOP PRODUCTS
          </Button>
        </Box>
        <CarouselComponent /> {/* Use the CarouselComponent */}
        <CalendarComponent /> {/* Use the CalendarComponent */}
      </Container>
    </>
  );
};

export default Home;