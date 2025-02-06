import styled from 'styled-components';


export const Container = styled.div`
    max-width:  1200px; 
    margin: 0 auto; 
    padding: 20px; 
    display: flex;
    justify-content: center; 
    align-items: center;
`    

export const PortfolioContainer = styled.div`
    display: flex;
    flex-wrap: wrap;   
    gap: 30px;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;    
    justify-content: center;`


export const ProjectCard = styled.div`
    width: calc(100% / 3 - 30px);
    width: 370px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);`

 export const ProjectTitle = styled.h3`
    color: #343a40;`


 export const ProjectType = styled.p`
 color: #6c757d;`

export const ProjectPhoto = styled.img`
width: 100%;
height: auto;`