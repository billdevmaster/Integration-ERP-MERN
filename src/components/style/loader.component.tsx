import React from "react";
import styled from 'styled-components';

//https://loading.io/css/

const LdsGrid = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    :after {
        content: "";
        display: block;
        width: calc(30px - 16px);
        height: calc(30px - 16px);
        border-radius: 50%;
        border: 3px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const Loader = (props) => {
    return (
        <div style={props.style}>
            <LdsGrid>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LdsGrid>
        </div>
    )
}
