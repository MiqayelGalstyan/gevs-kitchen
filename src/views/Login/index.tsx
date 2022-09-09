import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SignIn } from "../../store/slicers/auth";
import { ERequestStatus } from "../../store/config/constants";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import HPInput from "../../shared/ui/HPInput";
import HPLoadingButton from "../../shared/ui/HPLoadingButton";
import { emailRegex } from "../../helpers/validators";
import useStyles from "./style";
import { ISignInRequest } from "../../store/models/auth.interface";
import ScrollArea from "../../shared/containers/ScrollArea";
import { AppDispatch } from "../../store";

const Login = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const methods = useForm<ISignInRequest>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const { handleSubmit } = methods;

  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();

  const onSubmit = async (formData: ISignInRequest) => {
    try {
      setIsLoading(true);
      const { meta }: any = await dispatch(SignIn(formData));
      if (meta.requestStatus !== ERequestStatus.FULFILLED) {
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      navigate("/admin");
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <ScrollArea>
        <div className={classes.root}>
          <Grid container className={classes.container}>
            <Grid item md={6} xs={12} className={classes.leftColumn}>
              <Box className={classes.gradient}></Box>
            </Grid>
            <Grid item md={6} xs={12} className={classes.rightColumn}>
              <FormProvider {...methods}>
                <Box className={classes.form}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <HPInput
                      margin="normal"
                      name="email"
                      label="Email"
                      rules={{
                        required: { value: true, message: "Required Field" },
                        maxLength: 255,
                        pattern: {
                          value: emailRegex,
                          message: "Invalid email",
                        },
                      }}
                    />
                    <HPInput
                      type="password"
                      name="password"
                      margin="normal"
                      label="Password"
                      rules={{
                        required: { value: true, message: "Required Field" },
                        minLength: {
                          value: 8,
                          message: "At least 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "Max 30 characters",
                        },
                      }}
                    />
                    <Box my={2}>
                      <HPLoadingButton
                        fullWidth
                        color="primary"
                        variant="contained"
                        type="submit"
                        size="large"
                        disabled={isLoading}
                        isLoading={isLoading}
                      >
                        Log in
                      </HPLoadingButton>
                    </Box>
                  </form>
                </Box>
              </FormProvider>
            </Grid>
          </Grid>
        </div>
      </ScrollArea>
    </Fragment>
  );
};

export default Login;
