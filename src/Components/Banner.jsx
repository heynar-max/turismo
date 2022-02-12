import React from 'react';
import styled from 'styled-components';
import Buga from '../image/bugag.jpg';
import Logobuga from '../image/logobuga.png'




const Banner = () => {
    return( 
        <BannerStyled>
            <div className='container'>
                <div className='text'>
                    <h3>Visita nuestro municipio <span>buga</span></h3>
                    <img src={Logobuga} alt='logo'/>
                </div>
                <div className='text1'>
                    <p>Tenemos la Basilica.....
                        <br/>
                        reservas naturales , cerca a la naturaleza sitio tranquilo</p>
                    
                </div>
                
            </div>
        </BannerStyled>
    )
};

const BannerStyled = styled.div`
                

.container{
    width: 100%; 
    background-size: cover;
    box-shadow: 0 6px 18px #00000094;
    height: 55vh;
    background-image: url(${Buga});
    background-position: top center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
    

    .text{
        background: #111;
        opacity: .8;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        
            h3{
            margin: 1rem;
            font-size: 3rem;
            @media screen and (max-width:800px){
                font-size: 2rem;
            }
            @media screen and (max-width:561px){
                font-size: 1.5rem;
            }
            @media screen and (max-width:470px){
                font-size: 1.2rem;
            }
            }
                span{
                    font-family: 'Bebas Neue', cursive;
                    color: var(--rojiso)
                }


    }
    img{
        width: 4rem;
        height: auto;
        margin: 1rem;
        @media screen and (max-width:800px){
            width: 3rem;
            }
        @media screen and (max-width:561px){
            width: 2rem;
            }
        @media screen and (max-width:470px){
            width: 1.5rem;
            }
        
    }
    .text1{
        background: #111;
        opacity: .9;
        color: var(--rojiso);
        justify-content: space-around;
        display: flex;
        

            p{
                display: flex;
                margin: 1rem;
                font-size: 1.5rem;
                text-align: center;
            }
    }
    
}



    
    

`;

export default Banner;
