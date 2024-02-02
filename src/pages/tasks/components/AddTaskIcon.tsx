import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const AddTaskIcon = () => {
      const navigate = useNavigate();

      const fabStyle: React.CSSProperties = {
            position: "sticky",
            bottom: "16px",
            left: "16px",
      };

      return (
            <Fab color="primary" aria-label="add" style={fabStyle} onClick={() => navigate("/tasks/addtask")}>
                  <AddIcon />
            </Fab>
      );
};
