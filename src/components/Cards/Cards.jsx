import React from 'react';
import { Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";


const Cards = ({data:{confirmed, recovered, deaths, lastUpdate }}) => {
    // console.log(confirmed)
    if(!confirmed){
        return "Loading ..."
    }

    let active;
    let percentage;
    
        active += confirmed.value - recovered.value - deaths.value;
       percentage += deaths.value*100 /confirmed.value ;
     
  return (
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} duration={2.5} separator="," end={confirmed.value} />
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   

                    <Typography variant="body2">Number of infected cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            
            <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} duration={2.7} separator="," end={recovered.value} />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries cases of COVID-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.active)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Active</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} duration={3} separator="," end={active} />
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>



            <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} duration={3.5} separator="," end={deaths.value} />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths cases of COVID-19</Typography>
                    <Typography variant="body2">{percentage}% of deaths cases of COVID-19</Typography>
                </CardContent>
                </CardContent>
            </Grid>
        </Grid>
    </div>
  );
}



export default Cards;
