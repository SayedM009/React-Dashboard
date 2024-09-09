import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import { useState } from "react";

function Cabins() {
  const [addingCabin, setAddingCabin] = useState(false);
  return (
    <>
      <Row type="vertical">
        <Row>
          <Heading as="h1">All cabins</Heading>
          <p>Fillter / Sort</p>
        </Row>
        <CabinTable />
      </Row>
      <Row type="vertical">
        <Button
          onClick={() => setAddingCabin(!addingCabin)}
          style={{ margin: "2rem 0" }}
        >
          {addingCabin ? "Close New Cabin" : "Add New Cabin"}
        </Button>
        {addingCabin && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
