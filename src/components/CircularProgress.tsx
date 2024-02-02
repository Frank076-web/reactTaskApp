import CircularProgress from "@mui/material/CircularProgress";

const CircularLoader: React.FC = () => {
      return (
            <div
                  style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                  }}
            >
                  <CircularProgress color="primary" />
            </div>
      );
};

export default CircularLoader;
