import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import image from "../../public/ingreso.jpg";
import { useLoginForm } from "../../hooks/login.hook";
import { useLoginStore } from "../../store/loginStore";
import CircularLoader from "../../components/CircularProgress";

const containerStyle: React.CSSProperties = {
      height: "100vh",
      minWidth: "100vw",
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "15% 85%",
      backgroundSize: "cover",
};

export function Login() {
      const { formData, handleInputChange, handleFormSubmit, errors } = useLoginForm();
      const { logging } = useLoginStore();

      return (
            <>
                  <Container component="main" style={containerStyle}>
                        <Grid component="div" container direction="column" justifyContent="center" alignItems="center" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                              <Card style={{ borderRadius: 10, opacity: ".9" }}>
                                    <CardContent>
                                          <Typography component="h1" variant="h5" align="center">
                                                Ingreso al sistema
                                          </Typography>
                                          <form noValidate onSubmit={handleFormSubmit} style={{ width: "100%" }}>
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
                                                      {logging ? "Espere" : "Ingresar"}
                                                </Button>
                                          </form>
                                    </CardContent>
                              </Card>
                        </Grid>
                  </Container>
                  {logging && <CircularLoader />}
            </>
      );
}
