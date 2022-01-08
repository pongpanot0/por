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
                    <Paper className={classes.paper}> <h1 className={classes.tyh1}>ประวัติส่วนตัว</h1><p className={classes.ty}> ชื่อ : พงศ์ปณต <br />นามสกุล : สมัครการ <br /> ชื่อเล่น : แบงค์ <br /> อายุ	22 ปี <br />
                           </p>
                    </Paper>
                    <Paper className={classes.paper}> <h1 className={classes.tyh1}>ประวัติการทำงาน/ฝึกงาน </h1><p className={classes.ty}>
                      บริษัท  QPM	 ตั้งแต่ มกราคม 2562  -   ปัจจุบัน <br/>
                        ตำแหน่ง	เจ้าหน้าที่ฝึกอบรม	เงินเดือน	15200
                        <br/>เจ้าหน้าที่
                        หน้าที่รับผิดชอบ
                        อบรมพนักงานด้านต่างๆภายในระบบ อาคารชุดและหมู่บ้านจัดสรร
                        ออกแบบ Google From สำหรับทำข้อสอบ E-learning ออกแบบ หลักสูตรต่างๆ ร่วมถึงหาแนวทางทำ Paper less
                        <br/> <br/>
                        บริษัท ไทยซีเคียวริตี้ ตั้งแต่	พฤศจิกายน 2559  -  สิงหาคม 2561
                        ตำแหน่ง	ช่างลามิเนต	เงินเดือน	10500
                        <br/>เจ้าหน้าที่
                        หน้าที่รับผิดชอบ
                        เคลือบงานพิมพ์
</p>
                    </Paper>
                </Grid>

            </Grid>

        </div>
        </>
    )
}

export default About
