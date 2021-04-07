import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
}));

function getSteps() {
  return [
    "Load your data",
    "Select a Avatar for you account",
    "Congratulations",
  ];
}

export default function Paso({ state }) {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={state}
        alternativeLabel
        style={{ backgroundColor: "transparent", marginTop: "1%" }}
      >
        {steps.map((label) => (
          <Step key={label} style={{ color: "white" }}>
            <StepLabel ><span style={{color:'white'}} >{label}</span> </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
