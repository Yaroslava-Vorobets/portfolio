import styled from 'styled-components';


export const Header = styled.header`
    background-color: #FFFFFF;  `


export const Container = styled.div`
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 20px; 
    display: flex;
    justify-content: center; 
    align-items: center;
`    


 export const Logo = styled.a`
    display: flex;
    align-items: center;
    font-size: 26px;
    color:  #213547;
    margin-right: 93px;
   `

export const LogoSpan = styled.span`
    color: #2196F3; `

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(236, 236, 236, 1);`

export const MenuList = styled.ul`
    font-family: Roboto;
    font-sise: 18px;
    display: flex; 
    align-items: center; `

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-right: 50px;
    color: #2196F3; `

    
export const MenuLink = styled.a`
    padding: 24px 0 25px;  
    color: #2196F3;  `

export const ContactsList = styled.ul`   
    display: flex; 
    align-items: center;  `

    export const ContactsItem = styled.li`
    padding: 24px 0 25px;
    list-style: none;
    text-decoration: none; `

export const ContactsLink = styled.a`
    padding: 24px 15px 25px;  
    color: #757575;
    font-family: Roboto;
    &:hover,
    &:focus {
        color:rgb(97, 191, 238);
    }  `

    export const BlueButton = styled.button`
  background-color:rgb(97, 191, 238); 
  width: 125px;
  color: white;
  border: none; 
  border-radius: 25px; 
  padding: 10px 20px;
  font-size: 16px; 
  cursor: pointer; 
  transition: background-color 0.3s; 

  &:hover {
    background-color: #0056b3; 
  }
`;



    




