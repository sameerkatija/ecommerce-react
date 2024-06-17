import { FormInputLabel, Group, Input } from "./FormInput-style.jsx";
function FormInput({ label, ...otherFormInputs }) {
  return (
    <Group>
      <Input {...otherFormInputs} />
      {label && (
        <FormInputLabel shrink={otherFormInputs.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
