import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Ul = styled.ul`
list-style: none;
padding: 0%;

`
const Options = styled(Link)`
text-decoration: none;
font-size: medium;
font-weight: bold;
color: black;
font-size: 15px;
&:hover,:focus, ::after{
    color: blue;
}`

const Li = styled.li`
margin-bottom: 10px;
padding-left: 20px;
`
const Title = styled.h2`
font-size: medium;

`
const Div = styled.div`

`
export { Ul, Options, Li, Title, Div }