import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { CentralContainer, PageWrapper } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";

const LoginPage = () => {
  const { control, handleSubmit } = useForm();

  return (
    <PageWrapper>
      <CentralContainer sx={{ height: "100%" }}>
        <Box>
          <Box sx={{ fontSize: 32, mb: 1 }}>Let's get Vaccinated!!</Box>
          <Box sx={{ fontSize: 18, color: grey[800], mb: 6 }}>
            Login to book your vaccinations!!
          </Box>
          <form>
            <Controller
              name="mobile"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Box sx={{ mb: 3 }}>
                  <TextField
                    {...field}
                    label="Mobile Number"
                    sx={{ width: "320px" }}
                  />
                </Box>
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Box sx={{ mb: 5 }}>
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    sx={{ width: "320px" }}
                  />
                </Box>
              )}
            />
            <Box>
              <Button variant="contained">Login</Button>
            </Box>
          </form>
        </Box>
      </CentralContainer>
    </PageWrapper>
  );
};

export default LoginPage;
