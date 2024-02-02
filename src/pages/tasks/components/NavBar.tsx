import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../../store/loginStore";
import { ExitToApp } from "@mui/icons-material";

export const Navbar = () => {
      const { logOut } = useLoginStore();
      const navigate = useNavigate();

      const closeSession = () => {
            logOut();
            navigate("/");
      };

      return (
            <AppBar
                  position="sticky"
                  sx={{
                        top: 2,
                        marginTop: 2,
                        marginBottom: 1,
                  }}
            >
                  <Toolbar>
                        <Typography variant="h6">GESTOR DE TAREAS</Typography>
                        <div style={{ marginLeft: "auto" }}>
                              <IconButton color="inherit" onClick={closeSession}>
                                    <ExitToApp />
                                    <Typography variant="h6">Logout</Typography>
                              </IconButton>
                        </div>
                  </Toolbar>
            </AppBar>
      );
};
