/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";

function Action() {
  const params = useParams();
  const [serachParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <div>{params.action}</div>
      <div>{serachParams.get("userName")}</div>
      <div>{serachParams.get("userId")}</div>
      <div>{serachParams.get("email")}</div>
    </div>
  );
}

export default Action;
