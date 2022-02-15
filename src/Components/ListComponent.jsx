import React from 'react'
import styled from 'styled-components'
import {Icon} from '../Style/Icon'




const ListComponent = () => {
    return (
    <ListComponentStyled>
        <div className="about-info">
                    <div className="info-title">
                    <p><Icon className='fas fa-bus'/></p>
                    <p><Icon className='fas fa-taxi'/></p>
                    <p><Icon className='fas fa-utensils'/></p>
                    <p><Icon className='fas fa-church'/></p>
                    <p><Icon className='fas fa-bed'/></p>
                    <p><Icon className='fas fa-glass-martini'/></p>
                    </div>
                    <div className="info">
                        <p>: Bus intermunicipal</p>
                        <p>: Servicio de Taxi</p>
                        <p>: Restaurantes</p>
                        <p>: Iglesias Historicas </p>
                        <p>: Hoteles</p>
                        <p>: Bar y Discotecas</p>
                    </div>
                </div>
                
    </ListComponentStyled>
    )
}
const ListComponentStyled = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: space-around;

    .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 1rem;
                p{
                    font-weight: 600;
                    font-size: 1rem;
                }
            }
            i{
                color: var(--rojiso);
                @media screen and (max-width:420px){
                    font-size: .7rem;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    font-size: 1.5rem;
                    @media screen and (max-width:500px){
                    font-size: 1rem;
                }
                    @media screen and (max-width:420px){
                    font-size: .7rem;
                }
                }
            }
        }
`;
export default ListComponent