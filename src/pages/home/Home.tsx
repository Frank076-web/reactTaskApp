import { Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import image from "../../public/ingreso.jpg";
import { useEffect } from "react";

const containerStyle: React.CSSProperties = {
      height: "100vh",
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "15% 85%",
      backgroundSize: "cover",
      marginTop: 0,
};

const buttonStyle: React.CSSProperties = {
      color: "#FFFFFF",
      width: "10rem",
      marginTop: "8px",
};

export function Home() {
      const navigate = useNavigate();
      useEffect(() => {
            if (localStorage.getItem("user")) navigate("/tasks");
      }, [navigate]);

      return (
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3} style={containerStyle}>
                  <Grid item>
                        <Typography variant="h3" align="center" style={{ color: "#c0c1c1" }}>
                              Bienvenido
                        </Typography>
                  </Grid>
                  <Grid item>
                        <Link to="/login">
                              <Button variant="contained" fullWidth style={buttonStyle}>
                                    Ingresar
                              </Button>
                        </Link>
                  </Grid>
                  <Grid item>
                        <Link to="/register">
                              <Button variant="contained" fullWidth style={buttonStyle}>
                                    Registrarse
                              </Button>
                        </Link>
                  </Grid>
            </Grid>
      );
}
