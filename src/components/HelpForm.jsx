import React, { useState } from "react";
import "../styles/HelpForm.css"; // Importa el archivo CSS

const HelpForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    phone: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nombre y Apellido son obligatorios";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email es obligatorio y debe ser válido";
    if (!formData.orderNumber)
      newErrors.orderNumber = "Número del pedido es obligatorio";
    if (!formData.description)
      newErrors.description = "Descripción es obligatoria";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      onSuccess();
      // Aquí podrías enviar los datos al servidor
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="help-form" onSubmit={handleSubmit}>
      <label>
        Nombre y Apellido
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Número del Pedido
        <input
          type="text"
          name="orderNumber"
          value={formData.orderNumber}
          onChange={handleChange}
        />
        {errors.orderNumber && (
          <span className="error">{errors.orderNumber}</span>
        )}
      </label>

      <label>
        Número de Teléfono (Opcional)
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label>
        Descripción
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </label>

      <label>
        Imagen del Producto (Opcional)
        <input type="file" name="image" onChange={handleChange} />
      </label>

      <button type="submit">Enviar</button>
      {submitted && <p className="success">¡Formulario enviado con éxito!</p>}
    </form>
  );
};

export default HelpForm;
