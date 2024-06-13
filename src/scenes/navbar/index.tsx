//eslint-disable-next-line
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FlexBetween from "@/components/FlexBetween";


const COLOR = {
  "indigo-50":"#f0f5ff",
  "indigo-100":"#e0e7ff",
  "indigo-300":"#a5b4fc",
  "indigo-500":"#6366f1",
  "indigo-800":"#3730a3",
  "indigo-900":"#312e81",
}

const Navbar = () => {
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={COLOR["indigo-100"]}>
      {/*Left Side*/}
      <FlexBetween gap="0.75rem" sx={{ "&:hover": { color: COLOR["indigo-100"] }}}>
        <CurrencyRupeeIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="20px">
          Paisa
        </Typography>
      </FlexBetween>
      {/*Right Side*/}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: COLOR["indigo-100"]} }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : COLOR['indigo-800'],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: COLOR["indigo-100"]} }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : COLOR["indigo-100"],
              textDecoration: "inherit",
            }}
          >
            Prediction
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
