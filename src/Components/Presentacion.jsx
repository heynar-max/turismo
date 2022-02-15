import React from 'react';
import styled from 'styled-components';
import Galeriadefotos from './Galeriadefotos';
import ListComponent from './ListComponent';

const Presentacion = () => {
    return( 
        <PresentacionStyled>
            <div className='container'>
                <h2>Viaja a través de la historia al recorrer estos pueblos patrimonio.</h2>
                <h3>Estamos a 1 hora de Cali la capital del Valle del Cauca</h3>
                <div className='cuadro'>
                <div className='left'> 
                <ListComponent/>
                </div>
                <div className='rigth'>
                <Galeriadefotos/>
                </div>
                </div>
            </div>
        </PresentacionStyled>
    )
};
const PresentacionStyled = styled.div`
    width: 100%; 
    background-size: cover;
    box-shadow: 0 6px 18px #00000094;
    
    .cuadro{
        display: flex;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: start;
        @media screen and (max-width:900px){
            grid-template-columns: repeat(1, 1fr);
            margin: 2rem; 
        }
        .left{
            width:80%;
        
        }
        
            .rigth{
                width: 90%;
                
            }
    
    }
    h2{
        color: var(--rojiso);
        justify-content: space-around;
        display: flex;
        margin: 2rem;
        
        
    }
    h3{
        
        justify-content: space-around;
        
        display: flex;
        margin: 2rem;
        
    }
`;
export default Presentacion;