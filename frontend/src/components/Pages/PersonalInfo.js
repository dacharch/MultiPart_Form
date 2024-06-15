import { Container, TextField, Grid, Snackbar, Alert } from "@mui/material";
import { FormState } from "../../context/StateProvider";
import React, { useState } from "react";

const PersonalInfo = () => {
  const {
    fullName,
    setFullName,
    dateOfBirth,
    setDateOfBirth,
    email,
    setEmail,
  } = FormState();
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  function settingDateOfBirth(e) {
    const enterDob = e.target.value;
    setDateOfBirth(enterDob);
    validateDob(enterDob);
  }

  function validateDob(dob) {
    const currentDate = new Date();
    const enteredDate = new Date(dob);
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 18);

    if (isNaN(enteredDate.getTime())) {
      setError("Please Enter a Valid Date");
    } else if (enteredDate >= currentDate) {
      setError("Date of Birth must be in the past");
    } else if (enteredDate >= minDate) {
      setError("You must be at least 18 year old");
    }
  }
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleCloseSnackbar() {
    setError(null);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            name="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="off"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            name="dob"
            value={dateOfBirth}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={settingDateOfBirth}
            autoComplete="off"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!isValid}
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            autoComplete="off"
            required
          />
        </Grid>
      </Grid>

      <Snackbar
        open={error !== null}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="error"
        >
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PersonalInfo;
