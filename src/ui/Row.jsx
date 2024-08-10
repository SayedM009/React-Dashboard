import styled from "styled-components";

const Row = styled.div`
  ${(props) => [
    props.type === "center"
      ? `justify-content: center;`
      : "justify-content: space-between;",
  ]}
  display: flex;
  align-items: center;
  margin: auto;
`;

export default Row;
