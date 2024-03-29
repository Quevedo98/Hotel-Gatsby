import React from 'react';
import Header from './header';
import { Global, css } from "@emotion/react";
import Helmet from 'react-helmet';
import Footer from './footer';
import useSeo from '../hooks/use-seo';
;



const Layout = (props) => {

    const seo = useSeo();
    const { siteName, fallbackSeo: { description, title } } = seo;

    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing:border-box;
                    }
                    *,*:before, *:after {
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1, h2, h3{
                        margin: 0;
                        line-height: 1.5;

                    }

                    h1, h2{
                        font-family: 'Roboto', sans-serif;
                    }

                    h1 {
                        font-family: 'PT Sans', sans-serif;
                    } 
                    
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
                />
            {/* Este codigo es para agregar contenido (title, cdn normalize) al codigo fuente ,
            especificamente en el head del doc */}
            <Helmet>
                <title>{ title }</title>
                <meta name='description' content={ description } />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@100;700&display=swap" rel="stylesheet" />
            </Helmet>

            {/* Incluimos el componente Header */}
            <Header />


            {/* con esto se muestra el contenido que esta dentro de las etiquetas del componente, donde haya sido llamado  */}
            {props.children}
            <Footer title={ title }/>

        </>
    );
};

export default Layout;