import client from "@/config/contentful";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });

  const paths = response.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await client.getEntries({
    content_type: "trips",
    "fields.slug": params.slug,
  });

  return {
    props: {
      trip: response.items[0],
    },
    revalidate: 1,
  };
};

const TripDetails = ({ trip }) => {
  console.log("trip", trip);
  const { title, description, contentImage, brief, attraction } = trip.fields;
  return (
    <Stack spacing={5} my={6}>
      <Image
        src={`https:${contentImage.fields.file.url}`}
        alt="content Image"
        width={1200}
        height={600}
        layout="responsive"
      />

      <Stack spacing={2}>
        <Typography sx={{ color: "#708238" }} variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="h6" color="#7c7f7c">
          {brief}
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ color: "#708238" }} fontWeight="bold">
          Attractions
        </Typography>
        <Stack direction="row">
          {attraction &&
            attraction.map((item, index) => {
              return (
                <Typography variant="subtitle1" key={index} color="#7c7f7c">
                  {`${item},\u00A0`}
                </Typography>
              );
            })}
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ color: "#708238" }} fontWeight="bold">
          Description
        </Typography>
        <Box color="#7c7f7c">{documentToReactComponents(description)}</Box>
      </Stack>
    </Stack>
  );
};

export default TripDetails;
