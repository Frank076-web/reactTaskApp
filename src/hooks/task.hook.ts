import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../entities/task.entity";
import { useTasksStore } from "../store/tasksStore";

export function useTaskForm() {
      const [token, setToken] = useState<string | null>();
      const { tasks, addTask, updateTask, getTasks } = useTasksStore();
      const navigate = useNavigate();
      const [errors, setErrors] = useState({
            title: "",
            description: "",
      });
      const [valid, setValid] = useState(false);
      const [selectedOption, setSelectedOption] = useState("IN_PROGRESS");
      const params = useParams();

      const [formData, setFormData] = useState<Task[]>([new Task()]);

      useEffect(() => {
            let task: Task[];

            if (params.id !== undefined) {
                  task = tasks.filter(task => task.id === parseInt(params.id!));
                  setFormData(task);
                  setSelectedOption(task[0].completed);
            }
      }, [params.id, tasks]);

      useEffect(() => {
            const token = localStorage.getItem("token");
            if (token) {
                  setToken(token);
            } else {
                  navigate("/");
            }
      }, [navigate]);

      const validateForm = () => {
            const newErrors = {
                  title: "",
                  description: "",
            };

            if (!formData[0].title.trim()) {
                  newErrors.title = "El título es obligatorio";
            }
            setValid(Object.values(newErrors).every(error => error.length === 0));
            setErrors(newErrors);
      };

      const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
            const { name, value } = e.target;

            setFormData(prevData => {
                  const newData = {
                        ...prevData[0],
                        [name]: value,
                  };

                  return [newData];
            });
      };

      const handleFormSubmit: React.FormEventHandler = e => {
            e.preventDefault();
            validateForm();
      };

      const handleOptionChange = (event: SelectChangeEvent<string>) => {
            setSelectedOption(event.target.value);
      };

      useEffect(() => {
            let response = false;
            const fetchDataCreateUpdate = async () => {
                  if (!params.id) {
                        response = await addTask(formData[0], token!);
                        if (response) navigate("/tasks");
                  } else {
                        response = await updateTask(
                              {
                                    ...formData[0],
                                    completed: selectedOption,
                              },
                              params.id!,
                              token!,
                        );
                        if (response) navigate("/tasks");
                  }
            };
            if (valid) {
                  setValid(false);
                  fetchDataCreateUpdate();
            }
      }, [valid]);

      return {
            formData,
            handleInputChange,
            handleFormSubmit,
            handleOptionChange,
            selectedOption,
            errors,
      };
}
