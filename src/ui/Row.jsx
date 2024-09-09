import styled from "styled-components";

const Row = styled.div`
  display: flex;
  width: 100%;
  ${(props) => [
    props.type === "vertical"
      ? `flex-direction: column; justify-content: center; gap:2rem`
      : "justify-content: space-between; align-items: center;",
  ]}
`;

export default Row;
