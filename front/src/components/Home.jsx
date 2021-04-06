import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useDispatch, useSelector } from "react-redux";

/* import tileData from './tileData';

 */const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


 
/* import image from 'path/to/image.jpg';
 */  
 
  const tileData = [
    {
     img: "https://i.ytimg.com/vi/1uq5eJHwio4/maxresdefault.jpg",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://i.ytimg.com/vi/1uq5eJHwio4/maxresdefault.jpg",
       title: 'Image',
       author: 'author',
     },
     {
      img: "https://i.ytimg.com/vi/1uq5eJHwio4/maxresdefault.jpg",
       title: 'Image',
       author: 'author',
     },
     {
      img: "https://i.ytimg.com/vi/1uq5eJHwio4/maxresdefault.jpg",
       title: 'Image',
       author: 'author',
     },
     {
      img: "https://i.ytimg.com/vi/1uq5eJHwio4/maxresdefault.jpg",
       title: 'Image',
       author: 'author',
     },
  
 ];
 
export default function SingleLineGridList() {
  const classes = useStyles();
  const user = useSelector(state => state.user)
  console.log(user)

  return (
    <div className="containerCarousels">

      <div style={{display:'flex', padding:'10px', flexDirection:'column', backgroundColor:'black'}}>
      <h3>Para Niños</h3>
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} >
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>


    <div style={{display:'flex', padding:'10px', flexDirection:'column', backgroundColor:'black'}}>
      <h3>Para Niños</h3>
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} >
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>


    
    </div>
  );
}
