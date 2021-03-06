import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { userRegister } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CircularIndeterminate from "../views/Loading";
import { errForm } from "../utils/errFront";
 const useStyles = makeStyles((theme) => ({
  paper: {
     display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:'#eddcd2',
    borderRadius: 12,
    height: "100%",
    boxShadow: "2px 2px 2px black",
    width: "80%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#370617",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "25%",
   
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#370617",
    },
    "& .MuiInputLabel-outlined": {
      color: "#370617",
    },
  },
  input: {
    color: "black",
    fontSize: "17px",
    autoComplete: "off",
    backgroundColor: "transparent",
    autocomplete: false,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const [slide, setSlide] = React.useState(0);

  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = React.useState("");
  const [errorRegisterFront, setErrorRegisterFront] = React.useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const classInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  errorRegisterFront.firstName ? (classInput.firstName = classes.root) : null;
  errorRegisterFront.lastName ? (classInput.lastName = classes.root) : null;
  errorRegisterFront.email ? (classInput.email = classes.root) : null;
  errorRegisterFront.password ? (classInput.password = classes.root) : null;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorRegisterFront({});

    let objError = errForm(
      user.firstName,
      user.lastName,
      user.email,
      user.password
    );

    if (Object.keys(objError).length) {
      setErrorRegisterFront(objError);
    }
    //aca solo hacer handleNext y recien al final enviar toda la informacion
    if (Object.keys(objError).length == 0) {
      setLoading(true);
      dispatch(userRegister(user))
        .then(() => setLoading(false))
        .then(() => handleNext())
        .then(() => setSlide((prevActiveStep) => prevActiveStep + 1))
        .then(()=> history.push("/login"))
    }
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="containerMayor">
      {console.log(slide)}
      <div className="containerPaper">
        <CssBaseline />
        {loading ? (
          <CircularIndeterminate />
        ) : (
          <>
            {
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Load your Data
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(e) => handleOnSubmit(e)}
                  autocomplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className={classInput.firstName}
                        InputProps={{
                          className: classes.input,
                        }}
                        autocomplete="off"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className={classInput.lastName}
                        InputProps={{
                          className: classes.input,
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className={classInput.email}
                        InputProps={{
                          className: classes.input,
                        }}
                        variant="outlined"
                        autocomplete="false"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.password}
                        InputProps={{
                          className: classes.input,
                        }}
                        variant="outlined"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="false"
                        onChange={handleOnChange}
                      />
                    </Grid>
                  </Grid>
                 
                </form>
                <button
                    
                    className="loginButton"
                    onClick={(e) => {
                      handleOnSubmit(e);
                    }}
                  >
                    Register
                  </button>
              </div>
             }
          </>
        )}
      </div>
    
    </div>
  );
}
