import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const ContenidoInicio = () => {

    //STYLED component para el div que contiene el parrafo y demas 
    const TextoInicio = styled.div` 
        padding-top: 4rem;
        max-width: 1200px;
        width: 95%;
        margin: 0 auto;
        

        //esto solo se muestra en dispositivos con un minimo de...
        @media (min-width: 769px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 100px;
        }
        
        p{
            line-height: 2;  
            text-align: justify;          
        }
    `;


    //esta constante es la consulta al cms con graphql
    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "Inicio"}}){
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
    //   console.log(informacion.allDatoCmsPagina.nodes[0]);

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

    
    return (
        <>
            <h2
                css={css`
                    text-align:center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{ titulo }</h2>
            <TextoInicio>
                <p>{ contenido }</p>
                <GatsbyImage image={ imagen.gatsbyImageData } alt='inicio' />
            </TextoInicio>
        </>
    );
}

export default ContenidoInicio;