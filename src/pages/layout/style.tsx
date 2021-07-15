import styled from "styled-components";
import colors from "../../themes/colors.theme";

export const HeaderStyleWrapper = styled.div`
    padding-top: 10px;
    h5 {
        margin: 0;
        padding: 20px 0 20px;
        font-size: 35px;
        font-weight: 100;
        text-transform: uppercase;
        a {
            color: white;
            text-decoration: none;
            svg {
                margin-right: 10px;
            }
        }
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .dropdown > button {
            color: white;
            display: block;
            width: 150px;
            margin-top: 10px;
            margin-right: 14px;
            margin-left: 25px;
            padding: 14px 15px;
            float: right;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-align-self: flex-start;
            -ms-flex-item-align: start;
            align-self: flex-start;
            border-style: solid;
            border-width: 2px;
            border-color: white;
            border-radius: 50px;
            -webkit-transition: background-color 200ms ease;
            transition: background-color 200ms ease;
            font-family: 'Neue Haas Text Medium', sans-serif;
            font-size: 13px;
            line-height: 1;
            text-align: center;
            outline: none;
            box-shadow: none;
            background: transparent;
            &:focus {
                border: 0;
                outline: none;
                box-shadow: none;
                border: 1px solid white;
            }
        }
        .dropdown-toggle {
            background-color: white;
            color: black;
        }
        .dropdown-menu {
            padding: 0;
            h6 {
                padding: 10px 20px;
                background-color: #4d4d4d;
                color: white;
            }
            button {
                a {
                    text-decoration: none;
                    color: black;
                }
                padding: 10px 20px;
            }
        }
    }

    
`;