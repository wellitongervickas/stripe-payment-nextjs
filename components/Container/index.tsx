import React from 'react';

import ContainerStyled from './styles';

const Container: React.FC = ({ children }) => (
    <ContainerStyled>
        {children}
    </ContainerStyled>
);

export default Container;