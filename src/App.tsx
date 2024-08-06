import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState, useEffect } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline, Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setOpenSnackbar(true);
    const timer = setTimeout(() => {
      setOpenSnackbar(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={openSnackbar}
            autoHideDuration={10000}
            onClose={handleClose}
            message="Website may take 1-2 minutes to load as it's backed by a free tier host. If it doesn't load, try reloading."
            action={
              <>
                <Button color="secondary" size="small" onClick={handleReload}>
                  Reload
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </>
            }
          />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;