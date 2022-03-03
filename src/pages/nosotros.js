import * as React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ContenidoNosotros from "../components/contenidoNosotros";



const IndexPage = () => {

  return (
    <>
      <Layout>
        <ContenidoNosotros />
      </Layout>
    </>
  );
}
export default IndexPage;
