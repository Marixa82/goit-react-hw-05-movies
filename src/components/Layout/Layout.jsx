import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { StyledLink, Container, Header, Ul, Li } from './Layout.styled';



export const Layout = () => {
  return (
    <Container>
      <Header>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/movies">Movies</StyledLink>
          </Li>
      </Ul>
      </Header>
      <main>
         <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer/>
      </main>
    </Container>
  );
};