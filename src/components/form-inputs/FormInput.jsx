import "./FormInput.scss";
function FormInput({ label, ...otherFormInputs }) {
  return (
    <div className="group">
      <input className="form-input" {...otherFormInputs} />
      {label && (
        <label
          className={`${
            otherFormInputs.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
