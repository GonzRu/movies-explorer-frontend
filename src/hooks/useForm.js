import { useState } from 'react';

export default function useForm(defaultValues = {}, isValidDefault = true) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(isValidDefault);

  const onChange = (e) => {
    const { name, value, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  // const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
  //   setValues(newValues);
  //   setErrors(newErrors);
  //   setIsValid(newIsValid);
  // }, [setValues, setErrors, setIsValid]);

  return {
    values,
    errors,
    isValid,
    onChange,
  };
}
