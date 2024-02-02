import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../entities/user.entity";
import { useRegisterStore } from "../store/registerStore";

export function useRegisterForm() {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

      const { register, setRegistering } = useRegisterStore();
      const navigate = useNavigate();

      const [formData, setFormData] = useState<User>({
            name: "",
            email: "",
            password: "",
      } as User);

      const [errors, setErrors] = useState({
            name: "",
            email: "",
            password: "",
      });

      const [valid, setValid] = useState(false);

      const validateForm = () => {
            const newErrors = {
                  name: "",
                  email: "",
                  password: "",
            };

            if (!formData.name!.trim()) {
                  newErrors.name = "El nombre es obligatorio";
            } else if (formData.name!.length < 3) {
                  newErrors.name = "El nombre debe tener al menos 3 caracteres";
            }

            if (!formData.email.trim()) {
                  newErrors.email = "El correo electrónico es obligatorio";
            } else if (!emailRegex.test(formData.email)) {
                  newErrors.email = "El correo electrónico no es válido";
            }

            if (!formData.password.trim()) {
                  newErrors.password = "La contraseña es obligatoria";
            } else if (formData.password.length < 8) {
                  newErrors.password = "La contraseña debe tener al menos 8 caracteres";
            } else if (!passwordRegex.test(formData.password)) {
                  newErrors.password = "La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial";
            }

            setValid(Object.values(newErrors).every(error => error.length === 0));
            setErrors(newErrors);
      };

      const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
            const { name, value } = e.target;
            setFormData(prevData => ({ ...prevData, [name]: value }));
      };

      const handleFormSubmit: React.FormEventHandler = e => {
            e.preventDefault();
            validateForm();
      };

      useEffect(() => {
            if (valid) {
                  (async () => {
                        setValid(false);
                        setRegistering(true);
                        if (await register(formData)) {
                              setTimeout(() => {
                                    setRegistering(false);
                                    navigate("/login");
                              }, 2000);
                        } else {
                              setTimeout(() => {
                                    setRegistering(false);
                              }, 2000);
                        }
                  })();
            }
      }, [valid]);

      return {
            formData,
            handleInputChange,
            handleFormSubmit,
            errors,
      };
}
