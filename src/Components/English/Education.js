import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import './about.css'
import Paper from '@material-ui/core/Paper';
import GradeIcon from '@material-ui/icons/Grade';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PollSharpIcon from '@material-ui/icons/PollSharp';
import Header from './Header'
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
     color:'dark'
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  
function Education() {
    const classes = useStyles();
    return (
      <>
      <Header/>
        <div className="nax">
        <Timeline align="alternate">
              <TimelineItem>
          
          <TimelineOppositeContent>
           
          
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <ScheduleIcon  className="icon"/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
             <br/>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                ปริญญาตรี
              </Typography>
          
              <Typography> กำลังศึกษาต่อ...   <br/>   <br/>   <br/></Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      <TimelineItem>
          
        <TimelineOppositeContent>
        
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <GradeIcon className="gold" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              ประกาศนียบัตรวิชาชีพขั้นสูง
            </Typography>
            <Typography> สถานศึกษา วิทยาลัยสยามธุรกิจฯ:คอมพิวเตอร์ธุรกิจ <br/> ตั้งแต่ 2562-2563<br/>  เกรดเฉลี่ย 3.45</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
         
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <PollSharpIcon />
          </TimelineDot>
        
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
           ประกาศนียบัตรวิชาชีพ
            </Typography>
            <Typography> สถานศึกษา วิทยาลัยสยามธุรกิจฯ:คอมพิวเตอร์ธุรกิจ <br/> ตั้งแต่ 2559-2561<br/>  เกรดเฉลี่ย 2.75</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
  
    </Timeline>
    </div>
    </>
    )
}

export default Education
