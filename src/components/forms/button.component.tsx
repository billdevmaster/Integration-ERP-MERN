import React from 'react';
import styled from "styled-components";
import colors from '../../themes/colors.theme';
import { Loader } from '../style/loader.component';

export const Container = styled.button <{ color?: "primary" | "secondary" | "light" | "transparent" }>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${props => props.color ? colors[props.color] : colors["primary"]};
    border: none;
    color: white;
    height: 35px;
    padding: 10px 30px;
    :focus {
        outline: none;
    }
    :hover {
        opacity: 0.5
    }
`

type ButtonProps = {
    text: string;
    color?: "primary" | "secondary" | "light" | "transparent";
    style?: Object;
    onClick?: () => void;
    loading?: boolean;
    className?: string;
};

const Button = (props: ButtonProps) => {
    return <Container color={props.color} style={props.style} onClick={props.onClick} className={props.className}>
        {props.loading ?
            <Loader />
            :
            <>{props.text}</>
        }
    </Container>
}

export default Button;