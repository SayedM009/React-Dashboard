/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SearchBar from "./searchBar";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>
      <div style={{ width: "1000px" }}>
        <SearchBar />
      </div>
    </>
  );
}

export default Dashboard;
