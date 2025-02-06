import {
    Container,
    FooterLogo, LogoSpan,
    FooterWrap, FooterSection,
    FooterList,
    FooterLink
   
} from './PortfolioFooter.Styled'

const PortfolioFooter = () => {
    
    return (
        <FooterSection>
            < Container>
                <FooterWrap>
                    <FooterLogo lang="en" href="#"><LogoSpan >Web</LogoSpan>Studio</FooterLogo>
                    <address>
                        <ul>
                            <FooterList>
                                <p >Modena, via Garibaldi, 7A</p>
                            </FooterList>
                            <FooterList><FooterLink  href="mailto:info@devstudio.com">info@devstudio.com</FooterLink></FooterList>
                            <FooterList ><FooterLink  href="tel:+350961111111">+35 096 111 11 11</FooterLink>
                            </FooterList>
                        </ul>
                    </address>
                </FooterWrap>
            </ Container> 
        </FooterSection>
    )
}

export default PortfolioFooter;