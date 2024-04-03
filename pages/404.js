import { Chip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div className="container">
      <h1 style={{ marginBottom: "30px" }}>Oops!! Page Not Found</h1>
      <Link href="/" legacyBehavior>
        <Chip label="Go to Home" />
      </Link>

      <style jsx>
        {`
          .container {
            max-width: 1200px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 100px 50px;
          }
        `}
      </style>
    </div>
  );
};

export default PageNotFound;
