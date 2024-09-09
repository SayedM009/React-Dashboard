import Row from "../ui/Row";
import UsersTable from "../features/asfarUsers/UsersTable";
import Button from "../ui/Button";
import CreateAsfarUserForm from "../features/asfarUsers/CreateAsfarUserForm";
import { useState } from "react";
function AsfarUsers() {
  const [addingAsfarUser, setAddingAsfarUser] = useState(false);
  return (
    <>
      <Row>
        <h2>Asfar Users</h2>
      </Row>
      <Row>
        <UsersTable></UsersTable>
      </Row>
      <Row type="vertical">
        <Button
          onClick={() => setAddingAsfarUser(!addingAsfarUser)}
          style={{ margin: "3rem 0" }}
        >
          Create New User
        </Button>
        {addingAsfarUser && <CreateAsfarUserForm />}
      </Row>
    </>
  );
}

export default AsfarUsers;
