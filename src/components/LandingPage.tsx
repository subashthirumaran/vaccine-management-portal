import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import { CentralContainer, PageWrapper } from "./styles";

const LandingPage = () => {
  const history = useHistory();

  return (
    <PageWrapper sx={{ background: grey[50] }}>
      <CentralContainer sx={{ height: "80%" }}>
        <Box sx={{ fontSize: 40, mb: 4 }}>
          Welcome to vaccine Management Portal!!
        </Box>
        <Box sx={{ fontSize: 18, mb: 6, color: grey[800] }}>
          Wear Mask. Stay Safe. Get Vaccinated!!
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ mr: 8 }}
            onClick={() => history.push("/login")}
          >
            Login with Mobile Number
          </Button>
          <Button variant="outlined" onClick={() => history.push("/signup")}>
            Register as New User
          </Button>
        </Box>
      </CentralContainer>
      <CentralContainer></CentralContainer>
    </PageWrapper>
  );
};

export default LandingPage;
