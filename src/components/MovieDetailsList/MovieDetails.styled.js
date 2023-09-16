import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Logo = styled(Link)`
font-weight: 800;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.03em;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  &:hover, :focus {
    color: blue;
  }`

const Div = styled.div`
  margin-top: 20px;
  display: flex; 
  gap: 32px;
 flex-direction: row;
 
  `
const Section = styled.section`
max-width: 1158px;
padding: 20px;
/* display: flex; */
    

border-bottom: solid 2px rgba(0,0,0,0.3);`

const Img = styled.img`
display: flex;
max-width: 100%;
  height: auto;
 margin-left: auto;
    margin-right: auto; `

const Poster = styled.span`
width: 100%;
height: auto;`

export { Logo, Div, Section, Img, Poster }
