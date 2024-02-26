import styled from "styled-components"
import InputContainer from "./inputContainer"
import { SlClose } from "react-icons/sl";
import SubmmitButton from "./submittButton";
import { useState } from "react";

const StyledFormContainer = styled.div`
    display: flex ;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    height: 350px;
    width: 400px;

    background-color: #fff;
    padding:14px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

    @media screen and (max-width:600px) {
      width: 300px;
    }


`

const FormContainerHeader = styled.div`
    display:flex;
    width: 90%;
    justify-content: flex-end;
`

const CloseContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;

    font-size: 22px;
`

function FormContainer(props){

    const {onClick, curso} = props

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleSubmit = () => {
        if (nome === "" || email === "" || telefone === "") {
            alert(`Por favor, preencha todos os campos.`);
            
        } else {
      
            console.log("Formulário enviado!");
            redirectParaCurso()
        }
    }

    const redirectParaCurso = () => {
        switch (curso) {
            case 'vue':
              window.location.href = "https://www.youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL";
              break;
            case 'react':
              window.location.href = "https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO";
              break;
            case 'angular':
              window.location.href = "https://www.youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw";
              break;
            default:
              
              console.error(`Curso "${curso}" não reconhecido.`);
              break;
          }
    }

    return(
        <StyledFormContainer>

            <FormContainerHeader>
                <CloseContainer onClick={onClick}>
                    <SlClose />
                </CloseContainer>
                
            </FormContainerHeader>

            <InputContainer
              placeholder="Nome:"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <InputContainer
              placeholder="Email:"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputContainer
              placeholder="Telefone:"
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <SubmmitButton onClick={handleSubmit}/>

        </StyledFormContainer>
    )

}

export default FormContainer