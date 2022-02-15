import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Style/Layout';
import {Icon} from '../Style/Icon'

const Explicacion = () => {
    return( 
        <InnerLayout>
        <ExplicaionStyled>
            <div className='container'>
                <div className='text'>
                    <h2>La atracción principal en Buga es La Basílica de Nuestro Señor de los Milagros.</h2>
                    <p>La esencia de Buga reside en su centro histórico, en el que se destacan construcciones que datan de los siglos XVII y XVIII. Tal es el caso del mayor atractivo de la ciudad: la Basílica Menor del Señor de los Milagros, que es la cuarta más antigua del país. <br/>
                        Además, la basílica es toda una joya arquitectónica en sí misma y desde su terraza te permitirá apreciar los techos de teja que cifran el estilo colonial del centro histórico de la ciudad. </p>
                        <hr/>
                        <p>Otro importante hito de Buga es la antigua estación del ferrocarril, declarada Bien de Interés Cultural de la Nación. Posee una arquitectura colonial y una plazoleta exterior adornada con la Rosa de los Vientos.<br/>
                            
                            Además, por su ubicación estratégica, desde Buga puedes planear con facilidad viajes a otros lugares atractivos cercanos al municipio, como la Reserva Natural Forestal Bosque de Yocoto, el Lago Calima, el Parque Nacional Natural Las Hermosas, la Laguna de Sonso, el bosque seco El Vínculo y la hacienda El Paraíso, </p>
                </div>
                <div className='boton'>
                    <button><a  href="mailto:heynar76@hotmail.com"><Icon className='fas fa-envelope'></Icon>EMAIL DE ENSAYO</a></button>

                </div>

            </div>
        </ExplicaionStyled>
        </InnerLayout>
    )
};

const ExplicaionStyled = styled.div`
    width: 100%; 
    background-size: cover;
    box-shadow: 0 6px 18px #00000094;
    display: flex;
    flex-direction: column;

    .text{
        

        h2{
            text-align: center;
            color: var(--rojiso);
            margin: 1rem;
            
        }
        p{
            margin: 2rem;
            font-size: 1.2rem;
            
        }
    }
    .boton{
        margin: 1rem;
        display: flex;
        justify-content: space-around;
        transition: all .4s ease-in-out;
        
        
        button{
            background-color: var(--rojiso);
            font-size: 1.2rem;
            border-radius: 10px;
            box-shadow: 0 6px 18px #00000094;
            
            &:hover{
                background-color:#d6d5d5;
                }
            
        }
        a{
            color: #ffffff;
            text-decoration: none;
            &:hover{
            color: #111;
            }
        }
        i{
            color: #111;
        }
    }
`;
export default Explicacion;