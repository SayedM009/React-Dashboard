/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form.jsx";
import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput.jsx";
import Textarea from "../../ui/Textarea.jsx";
import toast from "react-hot-toast";
import FormRow from "./FormRow.jsx";
import Error from "./FormRow.jsx";
import Heading from "../../ui/Heading.jsx";
import useUpdateCabin from "./useEditCabin.js";

function CreateCabinForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { updateCabin, isUpdating } = useUpdateCabin();

  const theConvertedCabin = JSON.parse(searchParams.get("cabin"));
  // I made this variable because i faced an issue that created_at value came without the + as the same value from the cabin details

  const cabin = {
    ...theConvertedCabin,
    created_at: theConvertedCabin.created_at.replace(" ", "+"),
  };

  // React Hook Form Package
  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: cabin,
  });
  // Get The Errors Outside the  onSubmit or onError Call Back Functions
  const { errors } = formState;

  function onSubmit(data) {
    if (JSON.stringify(cabin) == JSON.stringify(data)) {
      setSearchParams({ cabin: data });
      toast.error(
        "No changes were made at least one change to can edit the cabin"
      );
    } else {
      updateCabin(data);
    }
  }

  return (
    <>
      <Heading
        as="h2"
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link to=".." relative="path">
          <HiArrowLeft style={{ cursor: "pointer" }} />
        </Link>
        Edit Cabin{" "}
        <span style={{ color: "var(--color-green-700)" }}>{cabin.name}</span>
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Cabin Name" error={errors.name?.message}>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "This Field is Required" })}
          />
        </FormRow>

        <FormRow label="Max capacity" error={errors.maxCapacity?.message}>
          <Input
            type="number"
            id="maxCapacity"
            {...register("maxCapacity", {
              required: "This Field is Required",
              min: {
                value: 1,
                message: "Minimum capacity is 1",
              },
            })}
          />
        </FormRow>

        <FormRow label="Regular price" error={errors.regularPrice?.message}>
          <Input
            type="number"
            id="regularPrice"
            {...register("regularPrice", {
              required: "This Field is Required",
            })}
          />
        </FormRow>

        <FormRow label="Discount" error={errors.discount?.message}>
          <Input
            type="number"
            id="discount"
            {...register("discount", {
              required: "This Field is Required",
              validate: (value) =>
                value <= getValues().regularPrice ||
                "Discount should be less that the regular price",
            })}
          />
        </FormRow>

        <FormRow label="Description" error={errors.description?.message}>
          <Textarea
            type="number"
            id="description"
            defaultValue=""
            {...register("description", { required: "This Field is Required" })}
          />
        </FormRow>

        <FormRow label="image">
          <FileInput id="image" accept="image/*" {...register("image")} />
          {errors.image?.message && <Error>{errors.image?.message}</Error>}
          Current Image : {cabin.image?.slice(cabin.image.lastIndexOf("-") + 1)}
        </FormRow>

        <FormRow style={{ justifyContent: "flex-end !important" }}>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button disabled={isUpdating}>Edit cabin</Button>
        </FormRow>
        {/* <Img src={theCabin.image}></Img> */}
      </Form>
    </>
  );
}

export default CreateCabinForm;
