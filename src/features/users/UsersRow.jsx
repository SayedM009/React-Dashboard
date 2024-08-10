/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import styled from "styled-components";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 2.4rem;
  align-items: center;
  padding: 2.4rem;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 5rem;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  text-transform: capitalize;
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CurrencyFormat = function (number) {
  return new Intl.NumberFormat("en-ae", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(number);
};

function CabinRow({ user }) {
  console.log(user);
  const {
    id,
    logo,
    userName,
    branchName,
    contactDetails,
    currentBalance,
    bookingsNumber,
    weeklySales,
    monthlySales,
    total,
    accountType,
    status,
    actions,
  } = user;
  console.log(user);
  return (
    <TableRow role="row">
      <Img src={logo} />
      <Cabin>{id}</Cabin>
      <Cabin>{userName.slice(0, userName.indexOf(" "))}</Cabin>
      <Cabin>{branchName}</Cabin>
      <Cabin>{contactDetails}</Cabin>
      <Cabin>{CurrencyFormat(currentBalance)}</Cabin>
      <Cabin>{CurrencyFormat(bookingsNumber)}</Cabin>
      <Cabin>{CurrencyFormat(weeklySales)}</Cabin>
      <Cabin>{CurrencyFormat(monthlySales)}</Cabin>
      <Cabin>{CurrencyFormat(total)}</Cabin>
      <Cabin>{status && "Active"}</Cabin>
      <Cabin>
        <PiDotsThreeOutlineVertical />
      </Cabin>
    </TableRow>
  );
}

export default CabinRow;
