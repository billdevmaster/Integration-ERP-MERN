import styled from "styled-components";
import colors from "../../themes/colors.theme";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    background-image: radial-gradient(at top left, #45F5A15E 0%, #00000000 25%);
    .text-center {
        text-align: center;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    .home-screen {
        width: 100%;
        height: 80vh;
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
    }

    .form-group {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        label {
            color: white;
            margin-right: 15px;
            width: 100px;
            text-align: left;
        }        
    }

    .modal {
        .modal-content {
            .modal-header {
                color: white;
                background-color: #7d7d7d;
                .close {
                    background: transparent;
                    border: none;
                    span {
                        font-size: 30px;
                    }
                }
            }
        }
    }
`

export default Container;