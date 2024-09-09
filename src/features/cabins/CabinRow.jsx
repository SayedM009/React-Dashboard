/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  HiEllipsisVertical,
  HiMiniPencilSquare,
  HiOutlineTrash,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi2";

import Button from "../../ui/Button";
import useDeleteCabin from "./useDeleteCabin";
import {
  Cabin,
  Discount,
  Img,
  Li,
  Price,
  TableRow,
  Ul,
} from "./cabinRowAppearance";

import { formatCurrency } from "../../utils/helpers";
import useCreateCabins from "./useCreateCabins";

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

function CabinRow({ cabin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabins } = useCreateCabins();

  const { image, name, maxCapacity, regularPrice, discount, description } =
    cabin;

  function handleDuplicating() {
    console.log(image);
    const DuplicatedCabin = {
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      image,
      discount,
      description,
    };

    createCabins(DuplicatedCabin);
    console.log(image);
  }

  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Up to {maxCapacity} pax</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>

      <HiEllipsisVertical
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <Ul
        movement={isMenuOpen != null ? (isMenuOpen ? "comeIn" : "goOut") : ""}
      >
        <Li>
          <Button
            size="small"
            disabled={isDeleting}
            onClick={() => deleteCabin(cabin)}
            style={{
              width: "100%",
              opacity: `${isDeleting ? ".5" : "1"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <HiOutlineTrash />
            <span style={{ fontSize: "10px" }}>Delete</span>
          </Button>
        </Li>
        <Li>
          <Button size="small" style={{ width: "100%" }}>
            <Link
              style={linkStyle}
              to={`editCabin?cabin=${JSON.stringify(cabin)}`}
              relative
            >
              <HiMiniPencilSquare />
              <span style={{ fontSize: "10px" }}>Edit</span>
            </Link>
          </Button>
        </Li>
        <Li>
          <Button
            size="small"
            style={{ width: "100%" }}
            disabled={isCreating}
            onClick={handleDuplicating}
          >
            <Link style={linkStyle}>
              <HiOutlineDocumentDuplicate />
              <span style={{ fontSize: "10px" }}>Duplicate</span>
            </Link>
          </Button>
        </Li>
      </Ul>
    </TableRow>
  );
}

export default CabinRow;
