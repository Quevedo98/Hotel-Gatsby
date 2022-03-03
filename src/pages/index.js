import * as React from "react";
import { css } from "@emotion/react";
import ImagenHotel from "../components/imagenHotel";
import Layout from "../components/layout";
import ContenidoInicio from "../components/contenidoInicio";
import useHabitaciones from '../hooks/use-habitaciones';
import HabitacionPreview from "../components/habitacionPreview";
import styled from '@emotion/styled';


const ListadoHabitaciones = styled.ul`

    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns:  repeat(3, 1fr);
        column-gap: 3rem;
    }

`;


const IndexPage = () => {

    const habitaciones = useHabitaciones();//SE utiliza el hook de use-habitaciones para obtener informacion


    
    return (

        <Layout>
            <ImagenHotel />
            <ContenidoInicio />

            <h2
                css={css`

                    text-align: center;
                    margin-top: 5rem;
                    font-size: 3rem;
                `}
            >
                Nuestras habitaciones
            </h2>

            <ListadoHabitaciones>
                {
                    habitaciones.map(habitacion => (
                        <HabitacionPreview 
                            key={habitacion.id}
                            habitacion={habitacion}
                        />
                    ))
                }
            </ListadoHabitaciones>
        </Layout>

    );

}

export default IndexPage;
