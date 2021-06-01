import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import spotifylogo from "../spotify.svg";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: "90%",
      height: 110,
      margin: "0.2em 1em",
      backgroundColor: "transparent",
    },
    details: {
      fontFamily: 'Quicksand',
      display:"flex",
      flex:1,
      padding: "0.2em 0",
      flexDirection:"column",
      justifyContent:"center",  
    },
    listenSpotifyLink:{
        width: 50,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",  
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 110,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
}));

function ResultCard({artist_name, song_title, album_cover, music_link}) {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={album_cover}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography 
                        component="h6" 
                        variant="h6"
                        style={{
                            fontFamily: 'Quicksand', color:"white"
                        }}
                    >
                        {song_title}
                    </Typography>
                        <Typography variant="subtitle1" 
                        color="textSecondary" 
                        style={{
                            fontFamily: 'Quicksand', color:"whitesmoke"
                        }}
                    >
                        {artist_name}
                    </Typography>
                    </CardContent>
                </div>
                <div className={classes.listenSpotifyLink}>
                    <a href={music_link}>
                        <img 
                            src={spotifylogo} 
                            style={{
                                width:30, 
                                color:"white"
                            }}
                        />
                    </a>
                </div>
            </Card>
    )
}

export default ResultCard
