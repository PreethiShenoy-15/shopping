import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        background: "linear-gradient(135deg, #FDFCFB 0%, #E2D1C3 100%)",
        color: "#333",
        py: 3, // Reduced height
        px: 7,
        textAlign: "center",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.1)",
        maxWidth: "100%", // Keeping the same width
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Logo Section - Left */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <img
            style={{
              width: "100px",
              height: "100px",
              filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
            }}
            src={"./shopping-5.jpg"}
            alt="logo"
          />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#6B4226" }}>
          Where Trends Meet Convenience!
          </Typography>
        </Grid>

        {/* Quick Links - Right */}
        <Grid item xs={12} md={8} sx={{ textAlign: "right" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#8B5E34" }}>
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end", gap: 4 }}>
            {["Home", "About", "Shop"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#6B4226",
                  padding: "6px 12px",
                  background: "#FAE3D9",
                  borderRadius: "8px",
                  boxShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.background = "#FAD2B6")}
                onMouseOut={(e) => (e.target.style.background = "#FAE3D9")}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Thank You Message - Centered */}
      <Typography
        variant="h4"
        sx={{
          mt: 2, // Adjusted for compact height
          fontWeight: "bold",
          fontFamily: "'Dancing Script', cursive",
          color: "#8B5E34",
          textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        Thank You, Visit Again!
      </Typography>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          fontSize: "12px",
          color: "#7A5542",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        &copy; {new Date().getFullYear()} ShopSphere. All Rights Reserved 0705.  
      </Typography>
    </Paper>
  );
};

export default Footer;