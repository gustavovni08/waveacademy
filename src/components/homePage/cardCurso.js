import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    cursor: pointer;

    @media screen and (max-width:600px) {
        width: 240px;
    }
`;

const ImageCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    background-color: #fff;
`

const ImageCard = styled.img`
    width: 160px;
    height: 160px;
`

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #fff;
    font-size: 22px;
    font-weight: 400;
    border-radius: 0px 0px 8px 8px;
    border-top: solid 0.1px #000;
`

function CardCurso(props) {
    const { img, title } = props

    const navigate = useNavigate() 

    const navegar = () => {
        navigate(`/${title}`);
    }



    return (
        <StyledCardContainer onClick={navegar}>
            <ImageCardContainer>
                <ImageCard src={img} />
            </ImageCardContainer>
            <CardTitle>{title}</CardTitle>
        </StyledCardContainer>
    )
}

export default CardCurso;