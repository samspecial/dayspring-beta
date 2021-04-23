import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  padding: 1rem 1rem;
  background-color: #1da737;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 15px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) {
    font-size: 12px;
    font-weight: 600;
  }
`;


export const LinkStyle = styled(Link)`
  padding: 1rem 1rem;
  background-color: #1da737;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 15px;
  display:block;
  text-decoration:none;
  width:fit-content;
  cursor:pointer;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  color: #000000;
  font-family: inter;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: #000000;
  font-family: inter;
  width: 100%;
  font-weight: 500;
  line-height: 60px;
  padding-top: 60px;
  min-height: 180px;
  background: #f0e7b9;
  border-radius: 10px;

  span {
    color: #1da737;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const BoxedSection = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 14rem;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const FullWidth = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 14rem;
  background: #1da737 96%;
  color: #ffffff;

  h2 {
    font-weight: 700;
    font-size: 2.1rem;
    margin-bottom: 1.4rem;
  }

  p {
    font-weight: 500;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;

    div {
      flex-direction: column;
      width: 30%;
      height: 100%;

      img {
        width: 8%;
        padding: 1.3rem 0;
      }
      h5 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.9rem;
      }

      p {
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    h2 {
      font-size: 1.4rem;
    }

    div {
      display: block;

      div {
        width: 100%;

        p {
          margin-bottom: 1.4rem;
        }
      }
    }
  }
`;
export const TwoColumn = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 24px;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    div:nth-child(1) {
      order: 2;
      margin-top: 15px;
      width: 100%;

      p {
        padding: 0px;
        border-bottom: 0.9rem;
        font-size: 0.85rem;
        text-align: justify;
      }
    }
    div img {
      width: 107%;
       margin: 0 auto;
    }
  }

  div p {
    margin-bottom: 24px;
    padding-right: 30px;
    font-size: 0.9rem;
  }

  div img {
    border-radius: 20px;
    display: block;
    margin: 0 auto;
  }
`;
export const Horizontal = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 24px;

  div:nth-child(1) {
    width: 55%;
  }
  div:nth-child(2) {
    width: 35%;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    div:nth-child(1),
    div:nth-child(2) {
      width: 100%;
    }
    p,
    li {
      font-size: 0.9em;
      text-align: justify;
      font-weight: 500;
    }
    ul {
      padding: 1rem;
    }
  }

  p {
    margin-bottom: 24px;
  }

  p,
  ul {
    margin-top: 1rem;
  }

  ul {
    list-style-type: none;
    border: 1px solid #f2f3f7;
    padding: 1rem 2rem;
    border-radius: 12px;
    position: relative;
    li {
      padding: 0.6rem 0;
      border-bottom: 1px solid #f2f3f7;
    }
    li:nth-child(1) {
      color: #1da737;
      padding-left: 20px;
    }
    li:nth-child(1):before {
      width: 8px;
      height: 8px;
      content: "";
      border-radius: 50%;
      color: #f0c603;
      background: #f0c603;
      position: relative;
      left: -20px;
      top: 15px;
      display: block;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem 2.5rem 0 2.5rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:start;
  
    label {
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
      width: 100%;
      
    }

    input,textarea {
      width: 100%;
      background: transparent;
      color: #ccc;
      border-radius: 8px;
      border: 1px solid #ccc;
      padding:1rem;
      display: block;
      font-weight: 400;
      margin-bottom: 0.85rem;
    }

    input:focus, textarea:focus{
      outline:1px solid #1da737;
    }
    input{
       height: 30px;
    }

    textarea{
      resize:none;
      width:100%;
    }
  
  @media (max-width:480px){
    padding:1rem 0.5rem;
  }

 
`;

export const FormGroup = styled.div`
width:48%;
display:flex;
flex-direction:column;
justify-content:space-around;

`;
export const MiniFlex = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;

`;

export const MainLogo = styled.img`
width:10%;
display:block;
`;

export const Footer = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 14rem;
  background:#000000;
  color:#FFFFFF;
  

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const SiteLink = styled(Link)`
 text-decoration:none;
    cursor:pointer;
    color:white;
    font-size:1rem;
`;

export const NavSection = styled.section`
  width: 100%;
  height: auto;
  padding: 0 14rem;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;