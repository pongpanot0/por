import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './ori.jpg';
import qpm from './qpm.jpg'
import './MyWorking.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header'
import html5 from './html5.png'
let bannerData = {
    title: "MaliNail",
   img:logo,
   des:"Logo ร้านทำเล็บ"
},
data = {
    title: "E-learning",
     img:qpm,
     des:"E-learning โปรเจคจบ ปวส.",
     
},
data1 = {
  title: "Html5",
   img:html5,
   des:"Html5+css",
   
},
data2 = {
    title: "Coming Soon",
     img:"https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        des:"Coming Soon..."
    }
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin:15
      },
      media: {
        height: 140,
      },
    
   
  }));
  
function MyWorking() {
    const classes = useStyles();
    return (
        <>
        <Header/>
        <div className="container">
        <Grid container spacing={3}>
       
          <Grid item xs>
            <Paper className={classes.paper}> <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
         
          image= {bannerData.img}
          title={bannerData.title}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {bannerData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {bannerData.des}
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}> <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.img}
          title= {data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.des}<br/>
         <a href="https://qpmt51.web.app/ ">เยี่ยมชม</a> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}> <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data1.img}
          title={data1.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data1.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data1.des} <br/>
          <a href="https://html56.web.app/index.html?fbclid=IwAR0ATvuVIpdKgcmWZszhJhc_4en9L5gwuEjNqUxKV4WxHURmvPKC2ejS5eU ">เยี่ยมชม</a> 
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}> <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data2.img}
          title={data2.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data2.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data2.des}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card></Paper>
          </Grid>
        </Grid>
       
      
      </div>
      </>
    )
}

export default MyWorking
