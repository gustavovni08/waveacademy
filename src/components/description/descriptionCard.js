import styled from "styled-components"
import { SlClock } from "react-icons/sl";
import { SlChart } from "react-icons/sl";

const DescriptionCardContainer = styled.div`
    position: relative;
    top:30px;
    display: flex;
    flex-direction: column-reverse;
`
const DescriptionCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 500px;
    height: 300px;
    border-radius: 8px;
    padding: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

    @media screen and (max-width:600px) {
        width:290px;

    }


`
const DescriptionCardHeader = styled.div`
    display: flex;
    align-items: center;

    height: 50px;

    font-size: 22px;
    font-weight: 500;
    
    border-bottom: solid 0.1px #d9d9d9 ;

    @media screen and (max-width:600px) {
        justify-content: center;

    }
`
const DescriptionCardIconContainer = styled.div`
    display: flex;

    @media screen and (max-width:600px) {
        justify-content: center;
    }
    

`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    width: 120px;
    height: 50px;
    justify-content: space-evenly;

    font-size: 18px;
    font: 400;

    @media screen and (max-width:600px) {
        width:80px
    }
`
const DescriptionCardTextContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 130px;
    align-items: center;
    padding-left: 20px;
    padding-top: ${(props) => (props.tempo ? "0" : "35px")};

    @media screen and (max-width:600px) {
        padding-left: 10px;
        height: 180px;
        max-height: 200px;
        padding-top: 100px;
        overflow-y: scroll;
    }
`
const DescriptionCardImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 90px;

    @media screen and (max-width: 600px) {
        display: none;
    }
`
const CardImage = styled.div`
    padding: 14px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`

const DescriptionCardImage = styled.img`
    width: 180px;
    max-height: 250px;
        
`

function DescriptionCard(props){

    const  {curso, tempo, nivel, descricao, img} = props

    return(
        <DescriptionCardContainer>
            <DescriptionCardStyle>
                <DescriptionCardHeader>
                    {curso}
                </DescriptionCardHeader>

                {tempo && nivel &&(
                                    <DescriptionCardIconContainer>

                                    <IconContainer>
                                        <SlClock/>
                                        <div>{tempo}Hrs</div>
                                    </IconContainer>
                
                                    <IconContainer>
                                        <SlChart />
                                        <div>{nivel}</div>
                                    </IconContainer>
                
                                </DescriptionCardIconContainer>
                )}


                <DescriptionCardTextContainer>
                        <p>
                        {descricao}
                        </p>
                </DescriptionCardTextContainer>

            </DescriptionCardStyle>
            {img && (            <DescriptionCardImageContainer>
                <CardImage>
                    <DescriptionCardImage
                    src={img}
                    alt="imagem do curso"
                    />
                </CardImage>

            </DescriptionCardImageContainer>)}

        </DescriptionCardContainer>
    )
}

export default DescriptionCard