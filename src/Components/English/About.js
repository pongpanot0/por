import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Abot.css'
import img from './74449.jpg'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Headers from './Header';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color:'#000000',
        fontSize: 10,
      
    },
    root: {
        width: '100%',
    },
    heading: {
        color:'#000000',
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    ty: {
        fontSize: 15,
        padding: 0,
        marginLeft: 15,
        color:'#000000',
        fontFamily: 'Kanit'
    },
    tyh1:{
        color:'#000000',
        fontFamily: 'Kanit'
    },

}));

function About() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
        <Headers/>
        <div className="cla">
            <Grid container spacing={3}>
                <Grid item xs>
                    <img src={img} className="pp" />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}> <h1 className={classes.tyh1}>MyProfile</h1><p className={classes.ty}> Name : Pongpanot <br />Surname : Samarkkarn <br /> Nickname : Bank <br /> Age 23 <br />
                           </p>
                    </Paper>
                    <Paper className={classes.paper}> <h1 className={classes.tyh1}>Experiences and other skills </h1><p className={classes.ty}>
                       QPM	 2562  -   Present <br/>
                         Training Office
                        <br/>
                       Create an Coures for the employees And arrange paperLess On googleForm GoogleDrive 
                        <br/> <br/>
                        Thaisecurity Printing	September 2559  -  August 2561
                        Laminate technician
                        <br/>
                        Laminate Paper for packing
</p>
                    </Paper>
                </Grid>

            </Grid>

        </div>
        </>
    )
}

export default About
