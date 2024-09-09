/* eslint-disable no-unused-vars */
import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAsfarUser } from "../../services/apiAsfarUsers";
import toast from "react-hot-toast";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const actions = {
  actions: [
    "Control of used services",
    "View bookings",
    "Financial movement",
    "Edit profile",
    "Control of payment methods",
  ],
};

function CreateAsfarUserForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createAsfarUser,
    onSuccess: () => {
      queryClient.invalidateQueries("Asfar_Users");
      toast.success("New User has Added");
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    mutate({ ...data, actions: JSON.parse(data.actions) });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="userName">User name</Label>
        <Input
          type="text"
          id="userName"
          {...register("userName", {
            required: "This field is Required",
            validate: (value) =>
              value.length >= 3 || "UserName Should be more than 3 charaters ",
          })}
        />
        <Error>{errors.userName?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          id="number"
          {...register("number", {
            required: "This field is Required",
            validate: (value) =>
              (typeof +value === "number" && value.length >= 7) ||
              "Have to put correct number more than 7 numbers",
          })}
        />
        <Error>{errors.number?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="branchName">Brach name</Label>
        <Input
          type="text"
          id="branchName"
          {...register("branchName", {
            required: "This field is Required",
          })}
        />
        <Error>{errors.branchName?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          {...register("email", { required: "This field is Required" })}
        />
        <Error>{errors.email?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="status">Status</Label>
        <select id="status" {...register("status")}>
          <option value="false">De-active</option>
          <option value="true">Active</option>
        </select>
      </FormRow>

      <FormRow>
        <Label htmlFor="logo">Logo</Label>
        <FileInput id="logo" accept="image/*" />
      </FormRow>

      {/* Hidden Fields */}

      <Input
        type="number"
        id="currentBalance"
        value={0}
        hidden
        {...register("currentBalance")}
      />

      <Input
        type="number"
        id="bookingsNumber"
        value={0}
        hidden
        {...register("bookingsNumber")}
      />

      <Input
        type="number"
        id="weeklySales"
        value={0}
        hidden
        {...register("weeklySales")}
      />

      <Input
        type="number"
        id="monthlySales"
        value={0}
        hidden
        {...register("monthlySales")}
      />

      <Input type="number" id="total" value={0} hidden {...register("total")} />

      <Input
        type="text"
        id="accountType"
        value="Asfar User"
        hidden
        {...register("accountType")}
      />

      <Input
        type="text"
        id="actions"
        value={JSON.stringify(actions)}
        hidden
        {...register("actions")}
      />

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add User</Button>
      </FormRow>
    </Form>
  );
}

export default CreateAsfarUserForm;
