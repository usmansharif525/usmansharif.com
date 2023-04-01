import React from "react";
import AnimatedCursor from "../components/AnimatedCursor";
import Layout from "../components/Layout";
import HomePage from "./Home";

const Main = () => {
  return (
    <>
      <AnimatedCursor />
      <Layout>
        <main className="mt-[64px]">
          <HomePage />
        </main>
      </Layout>
    </>
  )
};

export default Main;