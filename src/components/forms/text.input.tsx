import React from 'react';
import styled from "styled-components";


const Container = styled.div` 
    position: relative;
`

const Input = styled.input` 
    border: none;
    padding: 0px 20px;
    font-size: 18px;
    height: 35px;

    ${props => props.width && `width: ${props.width}`}
    :focus {
      outline: none;
    }
`

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  position: absolute;
  bottom: -17px;
  left: 20px;
`;

const SuccessText = styled.div`
  color: green;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  position: absolute;
  bottom: -17px;
  left: 20px;
`;

type TextInputProps = {
    onChange?: (text: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    password?: boolean;
    value?: string;
    style?: Object;
    errorMsg?: string;
    successMsg?: string;
    name: string;
}

const TextInput = (props: TextInputProps) => {
    return (
        <Container style={props.style}>
            <Input
                type={props.password ? "password" : ""}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                name={props.name}
            />
            {props.errorMsg && <ErrorText>{props.errorMsg}</ErrorText>}
            {props.successMsg && <SuccessText>{props.successMsg}</SuccessText>}
        </Container>
    );
}

export default TextInput;
