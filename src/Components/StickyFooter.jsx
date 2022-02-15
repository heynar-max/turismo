import React from 'react';
import styled from 'styled-components';
import logo from '../image/logobuga.png'

const StickyFooter = () => {
    return( 
        <StickyStyled>
            <div className='container'>
                <h3>Visitamos ........ te Esperaremos</h3>
                <div className='log'> 
                <img src={logo} alt='logo'/> 
                </div>
                <br></br>
                &copy; {new Date().getFullYear()} Copyright: Ensayo de mi ciudad 
            </div>
        </StickyStyled>
    )
};
const StickyStyled = styled.div`
    background: var(--gris);
    display: flex;
    justify-content: space-evenly;

    h3{
        color: var(--rojiso);
    }
    .log{
        display: flex;
        justify-content: center;
    
    img{
        width: 5rem;
        
        
    }
}
`;

export default StickyFooter;