import { Button, Card, CardContent, Container, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useTaskForm } from "../../../hooks/task.hook";
import { useParams } from "react-router-dom";
import { Navbar } from "./NavBar";

export function TaskForm() {
      const { formData, handleInputChange, handleFormSubmit, handleOptionChange, selectedOption, errors } = useTaskForm();

      const params = useParams();

      return (
            <Container component="main">
                  <Navbar />

                  <Card style={{ borderRadius: 10, marginTop: "30px" }}>
                        <CardContent>
                              <Typography component="h1" variant="h5" align="center">
                                    {params.id ? "Editar tarea" : "Agregar tarea"}
                              </Typography>
                              <form noValidate onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                                    <TextField
                                          margin="normal"
                                          required
                                          fullWidth
                                          id="title"
                                          label="Título"
                                          name="title"
                                          type="title"
                                          value={formData[0].title ? formData[0].title : ""}
                                          onChange={handleInputChange}
                                          error={!!errors.title}
                                          helperText={errors.title}
                                    />
                                    <TextField margin="normal" required fullWidth id="desciption" label="Descripción" name="description" type="text" value={formData[0].description ? formData[0].description : ""} onChange={handleInputChange} />
                                    {params.id && (
                                          <>
                                                <InputLabel id="predefined-options-label">Selecciona una opción</InputLabel>
                                                <Select labelId="options-label" id="options-select" label="Selecciona una opción" value={selectedOption} onChange={handleOptionChange} name="completed">
                                                      <MenuItem value="COMPLETED">COMPLETED</MenuItem>
                                                      <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                                                </Select>
                                          </>
                                    )}
                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                          Agregar
                                    </Button>
                              </form>
                        </CardContent>
                  </Card>
            </Container>
      );
}
