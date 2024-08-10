import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row>
        <Heading as="h1">All cabins</Heading>
        <p>Fillter / Sort</p>
      </Row>
      <Row type="center">
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
