import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { CentralContainer, PageWrapper } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";

const UserRegisterPage = () => {
  const { control, handleSubmit } = useForm();

  return (
    <PageWrapper>
      <CentralContainer sx={{ height: "100%" }}>
        <Box>
          <Box sx={{ fontSize: 32, mb: 8 }}>Create User Account</Box>
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
              <Button variant="contained">Register</Button>
            </Box>
          </form>
        </Box>
      </CentralContainer>
    </PageWrapper>
  );
};

export default UserRegisterPage;
