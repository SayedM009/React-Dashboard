import styled, { css } from "styled-components";

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 2.4rem 2.4rem 2.4rem 3.5rem;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

export const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

export const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

export const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

export const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export const styles = {
  comeIn: css`
    animation: comeIn 0.3s linear both;
    @keyframes comeIn {
      0% {
        right: -10%;
        opacity: 0;
      }
      100% {
        right: 2%;
        opacity: 1;
      }
    }
  `,
  goOut: css`
    animation: goOut 0.3s linear;
    @keyframes goOut {
      0% {
        right: 2%;
        opacity: 1;
      }
      100% {
        right: -10%;
        opacity: 0;
      }
    }
  `,
};

export const Ul = styled.ul`
  background: var(--color-grey-200);
  width: 100px;
  position: absolute;
  top: 0%;
  right: -20%;
  padding: 0.5rem;
  ${(props) => styles[props.movement]}//
`;

export const Li = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;
