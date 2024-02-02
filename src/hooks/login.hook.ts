import { useEffect, useState } from "react";
import { User } from "../entities/user.entity";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../store/loginStore";

export function useLoginForm() {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
      const navigate = useNavigate();

      const { isLoggedIn, logIn, setLogging } = useLoginStore();

      useEffect(() => {
            if (isLoggedIn) navigate("/tasks");
      }, [isLoggedIn, navigate]);

      const [formData, setFormData] = useState<User>(new User());

      const [errors, setErrors] = useState({
            email: "",
            password: "",
      });

      const [valid, setValid] = useState(false);
      const validateForm = () => {
            const newErrors = {
                  email: "",
                  password: "",
            };

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
            const fetchData = async () => {
                  setLogging(true);
                  setTimeout(() => {
                        setLogging(false);
                  }, 2000);
                  await logIn(formData);
            };

            if (valid) {
                  setValid(false);
                  fetchData();
            }
      }, [valid]);

      return {
            formData,
            handleInputChange,
            handleFormSubmit,
            errors,
      };
}
