import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";

// aqui tem uma sacada interessante para esticar o main para que o footer fique fixo no fundo sem usar display fixed
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;


function PageDefault({children}) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault;