import { useCallback, useEffect, useState } from "react";

export const useFormValidation = (stateSchema, validationSchema, callback) => {
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);

  const validateState = useCallback(() => {
    return Object.keys(validationSchema).some((key) => {
      const isInputRequired = validationSchema[key].required;
      const fieldState = state[key];

      if (fieldState.type === "checkbox") {
        return (
          isInputRequired &&
          (fieldState.selected === undefined || fieldState.error)
        );
      }

      return isInputRequired && (!fieldState.value || fieldState.error);
    });
  }, [state, validationSchema]);

  useEffect(() => {
    setDisable(validateState());
  }, [validateState]);

  const handleChange = ({ target }) => {
    const { key, selected, type, value } = target;
    const field = validationSchema[key];
    let error = "";

    if (type === "checkbox") {
      if (selected === undefined) {
        error = field.validator.error;
      }

      setState((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected,
          type,
          error,
        },
      }));
      return;
    }

    if (type === "question" && field.required) {
      if (!value) {
        error = "Поле обязательно для заполнения";
      } else if (field.validator.regEx) {
        if (!field.validator.regEx.test(value.toString())) {
          error = field.validator.error;
        }
      } else if (field.validator.length && field.validator.length > value.length) {
        error = field.validator.error;
      }

      setState((prevState) => ({
        ...prevState,
        [key]: { ...prevState[key], type, value, error },
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateState()) {
      callback();
      setState(stateSchema);
    }
  };

  return { state, disable, handleChange, handleSubmit };
};
