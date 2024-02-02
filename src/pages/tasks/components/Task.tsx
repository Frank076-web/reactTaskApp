import { Card, CardContent, Divider, Grid, IconButton, ListItem, ListItemText } from "@mui/material";
import { Task } from "../../../entities/task.entity";
import { useNavigate } from "react-router-dom";
import { useTasksStore } from "../../../store/tasksStore";

interface Props {
      task: Task;
}

export function TaskItem({ task }: Props) {
      const navigate = useNavigate();
      const { deleteTask } = useTasksStore();
      const token = localStorage.getItem("token");

      const handleDelete = async () => {
            deleteTask(task.id?.toString()!, token!);
      };

      return (
            <Card variant="outlined" style={{ marginBottom: "10px" }}>
                  <CardContent>
                        <ListItem>
                              <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={12}>
                                          <ListItemText primary={task.title} style={{ textAlign: "center" }} />
                                          <Divider style={{ margin: "20px 0" }} />
                                    </Grid>
                                    <Divider style={{ margin: "20px 0" }} />
                                    <Grid item xs={12} sm={12}>
                                          <ListItemText primary={task.description ? task.description : "Sin Descripción"} style={{ textAlign: "center" }} />
                                          <Divider style={{ margin: "20px 0" }} />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                          <ListItemText primary={task.completed} style={{ textAlign: "center" }} />
                                          <Divider style={{ margin: "20px 0" }} />
                                    </Grid>
                                    <Grid item xs={6} sm={9}>
                                          <IconButton edge="end" aria-label="edit" onClick={() => navigate(`/tasks/addtask/${task.id}`)}>
                                                ✏️ Editar
                                          </IconButton>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                                                🗑️ Eliminar
                                          </IconButton>
                                    </Grid>
                              </Grid>
                        </ListItem>
                  </CardContent>
            </Card>
      );
}
