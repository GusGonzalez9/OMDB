import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Route,
  Switch,
  Redirect,
  component,
  Link,
  useHistory,
} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { fetchMovies } from "../state/movies";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import {clearUser} from '../state/user'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    fontSize: "20px",
    border: "none",
    fontFamily: "Questrial, sans-serif",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    display: "none",
    width: "10%",
    marginLeft: "15px",
    color: "white",
    fontFamily: "Questrial, sans-serif",
    fontSize: "23px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
    fontFamily: "Questrial, sans-serif",
    fontSize: "20px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "23ch",
    },
  },
  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  items: {
    color: "black",
    fontFamily: "Questrial, sans-serif",
    fontSize: "14px",
  },
}));

export default function NavbarContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [movie, setMovies] = React.useState("");
  const history = useHistory();
  const user = useSelector(state => state.user)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChangeInput = (e) => {
    setMovies(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(movie));
    setMovies("");
    history.push("/movies");
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    > <Link to="/login" style={{textDecoration:'none'}}>
      <MenuItem>
        <p className={classes.items}>LOGIN</p>  
      </MenuItem>
      </Link>
      <Link to="/Register" style={{textDecoration:'none'}}>
      <MenuItem>
        <p className={classes.items}>REGISTER</p>  
      </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <p className={classes.items}>My profile</p>
      </MenuItem>
    </Menu>
  );
const setearLogout = ()=>{
  dispatch(clearUser())
}
  return (
    <div className={classes.grow}>
      <AppBar position="relative" style={{ backgroundColor: "#370617" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <LocalMoviesIcon />
          </Link>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              OMDB
            </Link>
          </Typography>

          <div className={classes.search}>
            <form onSubmit={(e) => handleSubmitSearch(e)}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={movie}
                placeholder="Search movie"
                onChange={handleChangeInput}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {user && !user.user? (
              
              <>

                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  <Button color="primary" className={classes.root}>
                    LOGIN
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Register"
                >
                  <Button color="primary" className={classes.root}>
                    REGISTER
                  </Button>
                </Link>
              </>
            ) : (
              <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center'}}>
                <span style={{color:'white', fontSize:'20px', marginRight:'2%',width:'75%'}}>Welcome {user.user.firstName}!</span>
              <Button color="primary" className={classes.root} onClick={()=> setearLogout()}>
                LOGOUT
              </Button>
              </div>
            )}

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
