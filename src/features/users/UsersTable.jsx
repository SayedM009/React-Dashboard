import { useQuery } from "@tanstack/react-query";
import { getAsfarUsers } from "../../services/apiAsfarUsers";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import UsersRow from "./UsersRow";
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  width: 100%;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 2.4rem;
`;

function UsersTable() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["Asfar_Users"],
    queryFn: getAsfarUsers,
  });

  if (isLoading) return <Spinner />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div style={{ textAlign: "center" }}>Logo</div>
        <div style={{ textAlign: "center" }}>ID</div>
        <div style={{ textAlign: "center" }}>User Name</div>
        <div style={{ textAlign: "center" }}>Branch</div>
        <div style={{ textAlign: "center" }}>Contact Details</div>
        <div style={{ textAlign: "center" }}>Balance</div>
        <div style={{ textAlign: "center" }}>No. Bookings</div>
        <div style={{ textAlign: "center" }}>Weekly Sales</div>
        <div style={{ textAlign: "center" }}>Monthly Sales</div>
        <div style={{ textAlign: "center" }}>Total Sales</div>
        <div style={{ textAlign: "center" }}>Status</div>
        <div style={{ textAlign: "center" }}>Actions</div>
      </TableHeader>
      {users.map((user) => (
        <UsersRow user={user} key={user.id} />
      ))}
    </Table>
  );
}

export default UsersTable;
