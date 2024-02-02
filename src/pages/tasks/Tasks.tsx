import { useEffect } from "react";
import { List, Container } from "@mui/material";
import { TaskItem } from "./components/Task";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../store/loginStore";
import { useTasksStore } from "../../store/tasksStore";
import { Navbar } from "./components/NavBar";
import { AddTaskIcon } from "./components/AddTaskIcon";

export function TaskPage() {
      const { isLoggedIn } = useLoginStore();
      const { tasks, getTasks } = useTasksStore();
      const navigate = useNavigate();

      useEffect(() => {
            if (!isLoggedIn) {
                  navigate("/");
            } else {
                  const token = localStorage.getItem("token");
                  if (token) {
                        (async () => {
                              await getTasks(token);
                        })();
                  }
            }
      }, [isLoggedIn, navigate, getTasks]);

      return (
            <Container component="main" maxWidth="lg">
                  <Navbar />
                  <List>{tasks.length > 0 && tasks.map(task => <TaskItem key={task.id} task={task} />)}</List>
                  <AddTaskIcon />
            </Container>
      );
}
