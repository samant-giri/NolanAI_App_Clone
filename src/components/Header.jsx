import React, { useEffect, useState } from 'react'
import { AppBar,Box, Toolbar, Stack, Typography, Link, Button } from "@mui/material"


const Header = () => {

  const [bgcolor, setBgcolor] = useState("transparent");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      setBgcolor("transparent");
    } else {
      setBgcolor("#191b1f");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

  return (
    <Box
      sx={{
        height: "4rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <AppBar
        sx={{
          position: "absolute",
          top: "0",
          zIndex: "1000",
          bgcolor,
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
          padding: "6px 0",
        }}
      >
        <Toolbar>
          <Box>
            <img
              style={{
                height: "36px",
                width: "64",
              }}
              src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=256&q=75"
              alt=""
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Stack direction={"row"} gap={"3rem"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"2rem"}
              display={{xs: "none", md:"flex"}}
            >
              <Link
                href="#"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255, 0.9)",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255, 0.9)",
                  textDecoration: "none",
                }}
              >
                Pricing
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255, 0.9)",
                  textDecoration: "none",
                }}
              >
                For Studios
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255, 0.9)",
                  textDecoration: "none",
                }}
              >
                Features
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255, 0.9)",
                  textDecoration: "none",
                }}
              >
                Create Script
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255, 0.9)",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
            </Stack>
            <Box>
              <button
                style={{
                  height: "2.5rem",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "2rem",
                  border: "none",
                  padding: "0 1rem",
                  fontFamily: "'Lexend Deca', 'Lexend Deca Fallback'",
                }}
              >
                Log In
              </button>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box></Box>
    </Box>
  );
}

export default Header