import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Link href='/'>
        <Stack alignItems="center" my={5}>
          <Typography variant="h2" sx={{ color: "#708238", fontSize: 60 }}>
            <strong>My Travel Blog</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#708238", letterSpacing: 10 }}
          >
            EAT SLEEP TRAVEL
          </Typography>
        </Stack>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
