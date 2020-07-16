import React from 'react';
import {Card, CardContent, Typography, Grid, CardMedia} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import image from './imageWorld.png';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate},countryData:{population,region,flag,area,capital},country}) => {
    
    if(!confirmed){
        return 'Loading...'
    }

    if(!country){
        population = 7800000000
        country = "World"
        region = "Earth"
        area = "510 million"
    }

    let bgImage = image;
    if(country!=='World'){
        bgImage = flag;
    }

    console.log();

    return(
        <div className={styles.container}>
            <Grid container spacing={0} justify="center"> 
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.details)}>
                    <Card >
                        <CardMedia
                        className={styles.media}
                        image={
                            bgImage
                        }
                        />
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Population</Typography>
                            <Typography variant="h6" >
                                <CountUp start = {0} end = {population} duration = {2.5} separator="," />                            
                            </Typography>
                            <br/>
                            <Grid container justify="space-between">  
                                <Typography inline="true" align="left" color="textSecondary">Area</Typography>
                                <Typography inline="true" variant="body2" align="right">{area} km&sup2;</Typography>                            
                            </Grid>                            
                            <Grid container justify="space-between">
                                <Typography inline="true" align="right" color="textSecondary">Region</Typography>                            
                                <Typography inline="true" variant="body2" align="right">{region}</Typography>
                            </Grid>                            
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator="," />                            
                        </Typography>
                        <br/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <br/><br/>
                        <Typography variant="body1">Number of active cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start = {0} end = {recovered.value} duration = {2.5} separator="," />                            
                        </Typography>
                        <br/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <br/><br/>
                        <Typography variant="body1">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start = {0} end = {deaths.value} duration = {2.5} separator="," />                            
                        </Typography>
                        <br/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <br/><br/>
                        <Typography variant="body1">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>                
            </Grid>
        </div>
    )
}

export default Cards