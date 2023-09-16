import styled from '@emotion/styled';
import { FaJenkins } from "react-icons/fa6";

const Ul = styled.ul`
list-style: none;
padding: 0%;
display: flex;
gap: 32px;
flex-wrap: wrap;
justify-content: space-around;
`
const Img = styled.img`
 display: flex;
 width: 100%;
  height: 300px;
 margin-left: auto;
    margin-right: auto; `

const DefaultImg = styled(FaJenkins)`
width: 200px;
  height: auto;
  object-fit: cover;
  color: blueviolet;`

const Div = styled.div`
    padding: 10px;
    gap: 20px;`

const Card = styled.li`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-around;
width: 200px;
height: auto;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
border-radius: 0px 0px 4px 4px;
background-color: #ffffff;`

const Span = styled.span`
margin-top: 10px;
font-size: medium;
font-weight: bold;`

export { Ul, Img, Div, Card, DefaultImg, Span }