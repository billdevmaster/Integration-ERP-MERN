import styled from "styled-components";
import colors from "../../themes/colors.theme";

export const HomeStyleWrapper = styled.div`
  color: white;
  .hero-panel {
    max-width: 1210px;
    margin: 0 auto;
    margin-top: 100px;
    .title {
      > p {
        color: #45F5A1;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }
      >h1 {
        color: #FFF;
        font-family: "DM Sans",Sans-serif;
        font-size: 78px;
        font-weight: 600;
        line-height: 1.15em;
      }
      .button-group {
        margin-top: 30px;
        button {
          &:first-child {
            font-family: "DM Sans",Sans-serif;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 1px;
            fill: #000;
            color: #000;
            background-color: #45F5A1;
            border-style: solid;
            border-width: 8px 8px 8px 8px;
            border-color: #000000C4;
            border-radius: 50px 50px 50px 50px;
            padding: 23px 36px 21px 36px; 
            margin-right: 25px;
            &:hover {
              background-color: #58F6AA;
              border-color: #000000D6;
            }
          }
          &:last-child {
            font-family: "DM Sans",Sans-serif;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 1px;
            fill: #FFF;
            color: #FFF;
            background-color: #45F5A100;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #FFFFFF2B;
            border-radius: 50px 50px 50px 50px;
            padding: 23px 36px 21px 36px;
            &:hover {
              color: #FFF;
              background-color: #FFFFFF14;
              border-color: #FFFFFF59;
            }
          }
        }
      }
    }
    .powerful-features {
      margin-top: 150px;
      .title {
        h1 {
          color: #FFF;
          font-family: "DM Sans",Sans-serif;
          font-size: 50px;
          font-weight: bold;
          line-height: 1.1em;
          margin-top: 30px;
        }
        p {
          margin-top: 40px;
          color: #FFFFFF96;
          font-size: 18px;
          line-height: 1.3em;
          text-transform: unset;
          font-weight: 400;
        }
      }

      .item {
        font-weight: 100;
        > div {
          background-color: transparent;
          background-image: linear-gradient(180deg, #131A14 0%, #131A1400 100%);
          transition: background 1s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
          margin: 15px 15px 15px 15px;
          padding: 50px 50px 50px 50px;
          border-radius: 10px 10px 10px 10px;
          h5 {
            color: #FFF;
            font-family: "DM Sans",Sans-serif;
            font-size: 22px;
            font-weight: bold;
            line-height: 1.25em;
            margin: 30px 0;
          }
          p {
            color: #FFFFFF96;
            font-family: "DM Sans",Sans-serif;
            font-size: 15px;
            line-height: 1.3em; 
          }
          a {
            color: #45F5A1;
            font-weight: 500;
            font-size: inherit;
            line-height: inherit;
            &:hover {
              text-decoration: underline !important;
            }
          }
          svg {
            color: #45F5A1;
            border-color: #45F5A1;
          }
        }
      }
    }
    .marks {
      margin-top: 70px;
      img {
        width: 30%;
        opacity: 0.3;
      } 
    }
  }

  .work-description {
    background-color: #EBEFF5;
    background-image: url(https://demo.themovation.com/stratus/wp-content/uploads/2021/01/Dots-4.svg);
    background-position: top center;
    background-repeat: repeat;
    background-size: auto;
    color: black;
    margin: 100px 0 0;
    padding-top: 150px;
    padding-bottom: 100px;
    > h1 {
      color: #000;
      font-family: "DM Sans",Sans-serif;
      font-size: 50px;
      font-weight: bold;
    }
    > p {
      font-family: "DM Sans",Sans-serif;
      font-size: 19px;
      line-height: 1.4em;
      color: #333;
    }
    .wrapper {
      max-width: 1210px;
      margin: 0 auto;
      .item {
        margin-top: 100px;
        &.down {
          margin-top: 150px;
        }
        .number {
          margin: 0px 0px -30px 35px;
          padding: 10px 30px 10px 30px;
          background-color: #45F5A1;
          border-style: solid;
          border-width: 4px 4px 4px 4px;
          border-color: #45F5A1;
          border-radius: 8px 8px 8px 8px;
          box-shadow: 0px 0px 20px 10px rgb(0 0 0 / 5%);
          color: #000;
          font-size: 50px;
        }
  
        .description {
          color: white;
          margin: 0px 0px 0px 0px;
          padding: 45px 40px 40px 40px;
          background-color: transparent;
          background-image: linear-gradient(
      160deg
      , #131A14 0%, #000 75%);
          border-radius: 10px 10px 10px 10px;
          box-shadow: 0px 0px 40px 10px rgb(0 0 0 / 5%);
          p {
            color: #FFF;
            font-family: "DM Sans",Sans-serif;
            font-size: 20px;
            line-height: 1.6em;
          }
        }
      }
    }
  }

  .questions {
    max-width: 1210px;
    margin: 0 auto;
    padding: 100px 0;
    .left-panel {
      > h1 {
        color: #FFF;
        font-family: "DM Sans",Sans-serif;
        font-size: 50px;
        font-weight: bold;
      }
      > p {
        color: #FFFFFF96;
        font-family: "DM Sans",Sans-serif;
        font-size: 18px;
        line-height: 1.5em;
        margin-top: 30px;
      }
      .collapse-wrapper {
        .item {
          margin-bottom: 9px;
          font-weight: 700;
          line-height: 1;
          margin: 0;
          padding: 15px;
          border-bottom: 1px solid #d4d4d4;
          border-color: #FFFFFF17;
          cursor: pointer;
          outline: none;
          margin-top: 20px;
          > a {
            font-family: "DM Sans",Sans-serif;
            text-decoration: none;
            line-height: 1.4em;
            margin-bottom: 10px;
          }
          .content {
            border-bottom-color: #FFFFFF17;
            color: #B1B1B1;
            font-family: "DM Sans",Sans-serif;
            padding: 10px 15px 20px 50px;
            font-weight: 100;
            line-height: 20px;
            p {
              margin: 0;
            }
          }
        }
      }
    }
  }

  .findout {
    max-width: 1210px;
    margin: 0 auto;
    padding: 100px 0;
    h1 {
      color: #FFF;
      font-family: "DM Sans",Sans-serif;
      font-size: 50px;
      font-weight: bold;
    }

    p {
      color: #FFFFFF96;
      font-family: "DM Sans",Sans-serif;
      font-size: 18px;
      line-height: 1.3em;
    }

    .item {
      font-weight: 100;
      > div {
        background-color: transparent;
        background-image: linear-gradient(180deg, #131A14 0%, #131A1400 100%);
        transition: background 1s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        margin: 15px 15px 15px 15px;
        padding: 50px 50px 50px 50px;
        border-radius: 10px 10px 10px 10px;
        h5 {
          color: #FFF;
          font-family: "DM Sans",Sans-serif;
          font-size: 22px;
          font-weight: bold;
          line-height: 1.25em;
          margin: 30px 0;
        }
        p {
          color: #FFFFFF96;
          font-family: "DM Sans",Sans-serif;
          font-size: 15px;
          line-height: 1.3em; 
        }
        a {
          color: #45F5A1;
          font-weight: 500;
          font-size: inherit;
          line-height: inherit;
          &:hover {
            text-decoration: underline !important;
          }
        }
        svg {
          color: #45F5A1;
          border-color: #45F5A1;
        }
      }
    }
  }

  .feature-finance {
    background-color: transparent;
    background-image: linear-gradient(160deg, #45F5A1 32%, #30AC71 100%);
    position: relative;
    margin: 0;
    > div.bg {
      background-image: url(https://demo.themovation.com/stratus/wp-content/uploads/2020/04/overlay-3.jpg);
      background-position: center left;
      background-size: cover;
      opacity: 0.1;
      transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    > div.wrapper {
      max-width: 1210px;
      padding: 120px 0;
      margin: 0 auto;
      z-index: 10;
      > div {
        > p.title {
          color: #000000B3;
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        > h1 {
          color: #000;
          font-family: "DM Sans",Sans-serif;
          font-size: 65px;
          font-weight: 600;
          line-height: 1.1em;
        }
  
        >p.description {
          color: #000000CC;
          font-family: "DM Sans",Sans-serif;
          font-size: 18px;
          line-height: 1.45em;
        }
      }
      div.involve {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button.get-involve {
          font-family: "DM Sans",Sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 1px;
          fill: #FFF;
          color: #FFF;
          background-color: #000;
          border-style: solid;
          border-width: 8px 8px 8px 8px;
          border-color: #000;
          border-radius: 50px 50px 50px 50px;
          padding: 22px 36px 20px 36px;
          cursor: pointer;
          &:hover {
            background-color: #020101D6;
            border-color: #02010100;
          }
          svg {
            font-weight: bold;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`