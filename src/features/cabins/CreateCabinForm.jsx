/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "./FormRow.jsx";
import Error from "./FormRow.jsx";
import useCreateCabins from "./useCreateCabins.js";

function CreateCabinForm() {
  const { isCreating, createCabins } = useCreateCabins();
  // React Hook Form Package
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  // Get The Errors Outside the  onSubmit or onError Call Back Functions
  const { errors } = formState;

  function onSubmit(data) {
    createCabins(
      { ...data, image: data.image[0] },
      { onSuccess: () => reset() }
    );
  }

  return (
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
          {...register("regularPrice", { required: "This Field is Required" })}
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
              "Dicount Shoud be less that Regular Price",
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
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This Field is Required",
          })}
        />
        {errors.image?.message && <Error>{errors.image?.message}</Error>}
      </FormRow>

      <FormRow style={{ justifyContent: "flex-end !important" }}>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Create cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
