/* eslint-disable no-unused-vars */
import Form from "../../ui/Form";
import FormRow from "../cabins/FormRow";
import Input from "../../ui/Input";
import useFetchingSettings from "./useFetchingSettings";
import useUpdatingSetting from "./useUpdatingSetting";

function UpdateSettingsForm() {
  const {
    settings: {
      breakfastPrice,
      maxBookingsLength,
      maxGeuestsPerBooking,
      minBookingsLength,
    } = {},
  } = useFetchingSettings();

  const { isLoading, updatingSetting } = useUpdatingSetting();

  function handleUpdating(e, fieldName) {
    const { value } = e.target;
    if (!value) return;
    updatingSetting({ [fieldName]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingsLength}
          disabled={isLoading}
          onBlur={(e) => handleUpdating(e, "minBookingsLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingsLength}
          disabled={isLoading}
          onBlur={(e) => handleUpdating(e, "maxBookingsLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGeuestsPerBooking}
          disabled={isLoading}
          onBlur={(e) => handleUpdating(e, "maxGeuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isLoading}
          onBlur={(e) => handleUpdating(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
