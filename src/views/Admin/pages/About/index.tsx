import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { AppDispatch } from "../../../../store";
import React, { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  changeAboutText,
  fetchAboutText,
} from "../../../../store/slicers/about";
import { ERequestStatus } from "../../../../store/config/constants";
import { useState } from "react";
import { useEffect } from "react";
import Editor from "../../../../shared/ui/Editor";
import HPLoadingButton from "../../../../shared/ui/HPLoadingButton";
import toast from "react-hot-toast";

const AdminAbout = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: {
      text: "",
    },
  });

  const { reset, handleSubmit } = methods;

  const fetchInitial = useCallback(async () => {
    setLoading(true);
    const { meta, payload }: any = await dispatch(fetchAboutText());
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setLoading(false);
      return;
    }
    reset(payload);
    setLoading(false);
  }, [dispatch, reset]);

  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

  const onSubmit = async (formData) => {
    setLoading(true);
    const { meta } = await dispatch(changeAboutText({ text: formData.text }));
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setLoading(false);
      toast.error("Something went wrong");
      return;
    }
    setLoading(false);
    toast.success("Successfully Updated");
  };

  if (loading) {
    return (
      <Box
        component={Paper}
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Box p={2} component={Paper} marginTop={3} marginBottom={2}>
        <FormProvider {...methods}>
          <Typography variant="h3" marginBottom={5}>
            Update About
          </Typography>
          <Editor name="text" />
          <Box marginTop={3}>
            <HPLoadingButton
              isLoading={loading}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              Update
            </HPLoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </React.Fragment>
  );
};

export default AdminAbout;
