import styled from "styled-components";
import colors from "../../themes/colors.theme";
import fonts from "../../themes/fonts.theme";

type TextProps = {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    p?: boolean;
}

const Text = styled.p <TextProps>`
    color: ${colors.dark};
    font-size: 20px;
    font-family: ${fonts.regular};
    margin: 0px;

    ${props => props.h1 && `
        font-size: 40px;
        font-family: ${fonts.bold};
    `}
    
    ${props => props.h2 && `
        font-size: 30px;
        font-family: ${fonts.bold};
    `}

    ${props => props.h3 && `
        font-size: 30px;
    `}

    ${props => props.p && `
        font-size: 16px;
    `}
`

export default Text;