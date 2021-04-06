import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { userLoggin } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CircularIndeterminate from "../views/Loading";
import { errForm } from "../utils/errFront";
  const useStyles = makeStyles((theme) => ({ 
  paper: {
  display: "flex",
    flexDirection: "column",
    alignItems: "center",
   backgroundColor:'white',
    borderRadius: 12,
    height: "100%",
    boxShadow: "2px 2px 2px black",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#fdd835",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "50%",
    marginLeft: "25%",
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fdd835",
    },
    "& .MuiInputLabel-outlined": {
      color: "#fdd835",
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

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [errorRegisterFront, setErrorRegisterFront] = React.useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value)
    setUser({ ...user, [name]: value });
  };
  const classInput = {
    email: "",
    password: "",
  };

  errorRegisterFront.email ? (classInput.email = classes.root) : null;
  errorRegisterFront.password ? (classInput.password = classes.root) : null;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorRegisterFront({});
    let objError = errForm(
      's','s',
      user.email,
      user.password
    );
    

    if (Object.keys(objError).length) {
      setErrorRegisterFront(objError);
    }
    //aca solo hacer handleNext y recien al final enviar toda la informacion
    if (Object.keys(objError).length == 0) {
      console.log(user)
      setLoading(true);
      dispatch(userLoggin(user))
        .then(() => setLoading(false))
        .then(()=> history.push("/"))
    }
  };


  return (
    <div className="containerMayor">
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e) => {
                      handleOnSubmit(e);
                    }}
                  >
                    
                  </Button>
                </form>
              </div>
            }
          </>
        )}

        
      </div>
    
    </div>
  );
}
