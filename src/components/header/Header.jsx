
import ModalWindow from '../modal/Modal'
 

import {
    Header, Container,    
    Logo, LogoSpan,
    Nav, MenuList, ListItem, MenuLink,
    ContactsList,  BlueButton

} from './Header.Styled';

const PortfolioHeader = ({onClick, show, onClose}) => {

    return (
     
        <Header>
            <Container>
                <Nav >
                    <Logo lang="en" href="#"><LogoSpan >Web</LogoSpan>Studio</Logo>
                    <MenuList>
                        <ListItem>
                            <MenuLink href="index.html">about</MenuLink>
                        </ListItem>
                        <ListItem>
                            <MenuLink href="#progects">progects</MenuLink>
                        </ListItem>
                        <ListItem>
                            <MenuLink href="#">contacts</MenuLink>
                        </ListItem>
                    </MenuList>
                    <ContactsList>
                        <BlueButton onClick={onClick}> contact us</BlueButton>
                        <ModalWindow show={show} onClose={onClose } />

                     
                    </ContactsList>
                </Nav>
            </Container>       
        </Header>      
    
       
)};

export default PortfolioHeader;