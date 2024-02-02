import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import image from "../../public/ingreso.jpg";
import { useRegisterForm } from "../../hooks/register.hook";
import { useRegisterStore } from "../../store/registerStore";
import CircularLoader from "../../components/CircularProgress";

const containerStyle: React.CSSProperties = {
      height: "100vh",
      minWidth: "100vw",
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "15% 85%",
      backgroundSize: "cover",
};

export function Register() {
      const { formData, handleInputChange, handleFormSubmit, errors } = useRegisterForm();

      const { registering } = useRegisterStore();

      return (
            <>
                  <Container component="main" style={containerStyle}>
                        <Grid component="div" container direction="column" justifyContent="center" alignItems="center" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                              <Card style={{ borderRadius: 10, opacity: ".9" }}>
                                    <CardContent>
                                          <Typography component="h1" variant="h5" align="center">
                                                Registro de Usuario
                                          </Typography>
                                          <form noValidate onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                                                <TextField
                                                      margin="normal"
                                                      required
                                                      fullWidth
                                                      id="name"
                                                      label="Nombre de usuario"
                                                      name="name"
                                                      autoFocus
                                                      value={formData.name}
                                                      onChange={handleInputChange}
                                                      error={!!errors.name}
                                                      helperText={errors.name}
                                                />
                                                <TextField
                                                      margin="normal"
                                                      required
                                                      fullWidth
                                                      id="email"
                                                      label="Correo Electrónico"
                                                      name="email"
                                                      type="email"
                                                      value={formData.email}
                                                      onChange={handleInputChange}
                                                      error={!!errors.email}
                                                      helperText={errors.email}
                                                />
                                                <TextField
                                                      margin="normal"
                                                      required
                                                      fullWidth
                                                      id="password"
                                                      label="Contraseña"
                                                      name="password"
                                                      type="password"
                                                      value={formData.password}
                                                      onChange={handleInputChange}
                                                      error={!!errors.password}
                                                      helperText={errors.password}
                                                />
                                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                                      {registering ? "Espere" : "Registrarse"}
                                                </Button>
                                          </form>
                                    </CardContent>
                              </Card>
                        </Grid>
                  </Container>
                  {registering && <CircularLoader />}
            </>
      );
}
