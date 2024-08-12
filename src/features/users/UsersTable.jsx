/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getAsfarUsers } from "../../services/apiAsfarUsers";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import UsersRow from "./UsersRow";
import { useState } from "react";

const Table = styled.table`
  width: 100%;
  margin-top: 5rem;
  border: 1px solid #ccc;
  height: 100%;
  user-select: none;
`;

const TableCell = styled.td`
  text-align: center;
  border-right: 1px solid #ccc;
  height: 100%;
  padding: 2.1rem;
  user-select: none;
  &:last-child {
    border-right: none;
  }
`;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.5fr 0.5fr 1fr 0.7fr 1.5fr 0.7fr 1fr 1fr 1fr 1fr 0.5fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 2.4rem;
// `;

function UsersTable() {
  const [active, setActive] = useState(null);
  const { data: users, isLoading } = useQuery({
    queryKey: ["Asfar_Users"],
    queryFn: getAsfarUsers,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <thead>
        <tr>
          <TableCell>Logo</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Branch</TableCell>
          <TableCell>Contact Details</TableCell>
          <TableCell>Balance</TableCell>
          <TableCell>No. Bookings</TableCell>
          <TableCell>Weekly Sales</TableCell>
          <TableCell>Monthly Sales</TableCell>
          <TableCell>Total Sales</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <UsersRow
            user={user}
            key={user.id}
            bg={i % 2 === 0}
            index={i}
            active={active}
            setActive={setActive}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <TableCell>Logo</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Branch</TableCell>
          <TableCell>Contact Details</TableCell>
          <TableCell>Balance</TableCell>
          <TableCell>No. Bookings</TableCell>
          <TableCell>Weekly Sales</TableCell>
          <TableCell>Monthly Sales</TableCell>
          <TableCell>Total Sales</TableCell>
          <TableCell>Status</TableCell>
          <td style={{ textAlign: "center" }}>Actions</td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default UsersTable;
