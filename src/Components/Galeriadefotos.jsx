import React from 'react'
import styled from 'styled-components'
import Titledato from './Titledato'


const Galeriadefotos = () => {
  return (
    <GaleriaStyled>
      <div className='tile'>
    {
      Titledato.map((tile)=>{
        return <div key={tile.title} className={'title-item'}>
                <div className="image">
                  <img src={tile.img} alt={"imagen"}/>
                </div>
                <div className='title'>
                <a href={tile.link}>
                      {tile.title}
                </a>

                </div>
              
              </div>
      })
    } 
    </div>
    </GaleriaStyled>
  )
}
const GaleriaStyled = styled.div`
  .tile{
      display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        
        @media screen and (max-width:600px){
          grid-template-columns: repeat(1, 1fr);
        }
        
        
        
        .image{
            width: 100%;
            height:80%;
            box-shadow: 0 6px 18px #00000094;
            
            
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
        }
        .title{
          
            a{
              color: #000000;
              font-size: 1.2rem;
              @media screen and (max-width:400px){
                font-size: 1rem;
              }
              
            }
        }
  }
`;
export default Galeriadefotos