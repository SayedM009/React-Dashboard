/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Img = styled.img`
  display: block;
  width: 5rem;
  margin: auto;
`;

const TableCell = styled.td`
  text-align: center;
  height: 100%;
  padding: 1rem;
  user-select: none;
`;

const Actions = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
  &::before {
    content: "Actions";
    position: absolute;
    background-color: black;
    color: white;
    font-size: 11px;
    padding: 3px;
    /* border-radius: 20px; */
    top: -30px;
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    color: white;
    border: 5px solid;
    border-color: black transparent transparent transparent;
    top: -8px;
    display: none;
  }
  &:hover&::before,
  &:hover&::after {
    display: block;
  }
`;

const ActionsList = styled.ul`
  position: absolute;
  background-color: white;
  color: black;
  width: 300px;
  right: 210%;
  margin-bottom: 10px;
  text-align: left;
  font-size: 15px;
  border: 1px solid #aaa;
  border-bottom: none;
  user-select: none;
`;

const ActionLi = styled.li`
  padding: 1.5rem 0 1rem 1.5rem;
  &:hover {
    background-color: #aaa;
  }
  border-bottom: 1px solid #aaa;
`;

function CabinRow({ user, bg, index, active, setActive }) {
  const {
    id,
    logo,
    userName,
    branchName,
    email,
    currentBalance,
    bookingsNumber,
    weeklySales,
    monthlySales,
    total,
    accountType,
    status,
    actions,
    number,
  } = user;

  function actionController() {
    setActive(active === null ? index : active === index ? null : index);
  }

  return (
    <tr style={{ background: `${bg && "#ffffff"}` }}>
      <TableCell>
        <Img src={logo} />
      </TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{userName.slice(0, userName.indexOf(" "))}</TableCell>
      <TableCell>{branchName}</TableCell>
      <TableCell>
        <p>{email}</p>
        <p>{number}</p>
      </TableCell>
      <TableCell>{formatCurrency(currentBalance)}</TableCell>
      <TableCell>{bookingsNumber}</TableCell>
      <TableCell>{formatCurrency(weeklySales)}</TableCell>
      <TableCell>{formatCurrency(monthlySales)}</TableCell>
      <TableCell>{formatCurrency(total)}</TableCell>
      <TableCell>
        <select name="" id="" defaultValue={status}>
          <option value="true">Active</option>
          <option value="false">De-Active</option>
        </select>
      </TableCell>
      <TableCell>
        <Actions onClick={actionController}>
          <ActionsList
            style={{ display: `${index === active ? "block" : "none"}` }}
          >
            {actions.actions.map((action, i) => {
              return (
                <Link
                  to={`${action}?userName=${userName}&userId=${id}&email=${email}`}
                  relative
                  target="_blank"
                  key={i + id}
                >
                  <ActionLi>{action}</ActionLi>
                </Link>
              );
            })}
          </ActionsList>
          <PiDotsThreeOutlineVertical />
        </Actions>
      </TableCell>
    </tr>
  );
}

export default CabinRow;
