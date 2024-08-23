import { useState } from "react";

const useCartForm = (onSubmit) => {
  const [postalCode, setPostalCode] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!postalCode || isNaN(postalCode))
      newErrors.postalCode = "El código postal debe ser un número válido.";
    if (!shipping) newErrors.shipping = "Debes seleccionar un método de envío.";
    if (!payment) newErrors.payment = "Debes seleccionar una forma de pago.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    } else {
      console.error("handleSubmit fue llamado sin un evento");
      return;
    }

    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      if (onSubmit) onSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  return {
    postalCode,
    setPostalCode,
    shipping,
    setShipping,
    payment,
    setPayment,
    discountCode,
    setDiscountCode,
    errors,
    submitted,
    setSubmitted,
    handleSubmit,
  };
};

export default useCartForm;
