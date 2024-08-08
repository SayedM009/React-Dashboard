import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 2.5rem;
      font-weight: 900;
    `}

  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 700;
    `}

    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 1.5rem;
      font-weight: 500;
    `}

    line-height:1.7
`;

export default Heading;
