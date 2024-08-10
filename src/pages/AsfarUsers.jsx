import Row from "../ui/Row";
import UsersTable from "../features/users/UsersTable";
function AsfarUsers() {
  return (
    <>
      <Row>
        <h2>Asfar Users</h2>
      </Row>
      <Row type="center">
        <UsersTable></UsersTable>
      </Row>
    </>
  );
}

export default AsfarUsers;
