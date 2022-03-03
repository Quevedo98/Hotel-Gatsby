import React from 'react';
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";

const Contenido = styled.main`

    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 70px;
    }

    p{
        text-align: justify;
        line-height: 2;
        margin-top: 2rem;
    }
`;


const ContenidoNosotros = () => {
    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}){
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData
                }
            }
        }
    }
    `)
    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{ titulo }</h2>
            <Contenido>
                <p>{ contenido }</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt='Nosotros'/>
            </Contenido>
        </>
     );
}
 
export default ContenidoNosotros ;


// query ($slug: String!) {
//     allDatoCmsHabitacion(filter: {slug: {eq: $slug}}) {
//       nodes {
//         titulo
//         contenido
//         imagen {
//           gatsbyImageData
//         }
//       }
//     }
//   }