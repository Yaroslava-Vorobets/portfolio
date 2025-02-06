import {
    Container,
    PortfolioContainer,
    ProjectCard, ProjectTitle,    
    ProjectType, ProjectPhoto
} from './mainSection.Styled'
import box from '../../../public/box.jpg'
import book from '../../../public/book.jpg'
import headphone from '../../../public/headphone.jpg'
import label from '../../../public/label.jpg'
import poster from '../../../public/poster.jpg'
import delishes from  '../../../public/delishes.jpg'


   
const MainPortfolio = () => {
    const projects = [
        { title: 'Techosite', type: 'Web-site', image: book},
        { title: 'New Orlean vs Golden Star', type: 'Design',image: delishes},
        { title: 'Restaurant Seafood', type: 'Application',image: box},
        { title: 'Limited Edition', type: 'Web-site', image: headphone},
        { title: 'Progekt LAB', type: 'Design',image: label},
        { title: 'Restaurant Seafood', type: 'Application',image: poster},
    ];

    return (
        <section>
            <Container>
                <PortfolioContainer>
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                             <img src={project.image} alt={project.title} />       
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectType>{project.type}</ProjectType>
                        </ProjectCard>
                    ))}
                </PortfolioContainer>
            </Container>
        </section>
    )
};

export default MainPortfolio