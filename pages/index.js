import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import client from "@/config/contentful";
import { Grid } from "@mui/material";
import TripCard from "@/components/TripCard";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });

  return {
    props: {
      trips: response.items,
    },
    revalidate: 1,
  };
};

export default function Home({ trips }) {
  console.log(trips);
  return (
    <Grid container spacing={5} my={2}>
      {trips &&
        trips.map((trip) => (
          <Grid xs={12} sm={6} lg={4} item key={trip.sys.id}>
            <TripCard trip={trip} />
          </Grid>
        ))}
    </Grid>
  );
}
