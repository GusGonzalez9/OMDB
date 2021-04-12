import React from "react";
import {deleteFavorites} from '../state/favorites'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { Link } from "react-router-dom";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { allFavorites } from "../state/favorites";
import { createMuiTheme } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
export default function CustomizedTables() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [favorites, setFavorites] = React.useState([]);

  const DeleteFavorite = (id) => {
    dispatch(deleteFavorites(id)).then(res => setFavorites(res.payload.data))
  }

  React.useEffect(() => {
    dispatch(allFavorites()).then((res) => setFavorites(res.payload.data));
  }, []);
  return (
    <TableContainer component={Paper} style={{backgroundColor:'#370617', width:'95%', marginLeft:'2%',marginTop:'2%',boxShadow:'2px 2px 2px white'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>Title</StyledTableCell>
            <StyledTableCell align="right"  style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>Year</StyledTableCell>
            <StyledTableCell align="right"  style={{color:'white',fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>Type</StyledTableCell>
            <StyledTableCell align="right"  style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>Ver</StyledTableCell>
            <StyledTableCell align="right"  style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favorites[0] &&
            favorites.map((row) => (
              <StyledTableRow key={row.Title}>
                <StyledTableCell component="th" scope="row" style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>
                  {row.Title}
                </StyledTableCell>
                <StyledTableCell align="right"  style={{color:'white',fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>{row.Year}</StyledTableCell>
                <StyledTableCell align="right"  style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>{row.Type}</StyledTableCell>
                <StyledTableCell align="right"  style={{color:'white', fontSize:'100%',fontFamily: theme.typography.fontFamily[6] }}>
                  <Link
                    to={`/movie/${row.imdbID}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="buttons2">
                      <i className="fas fa-eye"></i>
                    </div>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button className="buttonDelete" onClick= {()=> DeleteFavorite(row.imdbID) }>
                  <DeleteForeverIcon  style={{color:'white'}}/>
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
