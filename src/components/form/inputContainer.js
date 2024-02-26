import styled from "styled-components"

const StyledInputContainer = styled.input`
    width: 80%;
    height: 30px;
    border-radius: 8px;
    border: solid 0.1px ;
`

function InputContainer(props){

    const {placeholder, type, onChange, value} = props

    return(
        <StyledInputContainer
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        />
        
    )
}

export default InputContainer