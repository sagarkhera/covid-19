import React from 'react';
import {Card, CardContent, Typography, Grid, CardMedia} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import image from './imageWorld.png';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate},countryData:{population,region,flag},country}) => {
    
    if(!confirmed){
        return 'Loading...'
    }

    if(!country){
        population = 7800000000
        country = "World"
        region = "NA"
    }

    let bgImage = image;
    if(country!='World'){
        bgImage = flag;
    }

    console.log(bgImage);

    return(
        <div className={styles.container}>
            <Grid container spacing={0} justify="center"> 
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
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.details)}>
                <Card >
                    <CardMedia
                    className={styles.media}
                    image={
                        bgImage
                    }
                    />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Population in {country}</Typography>
                        <Typography variant="h6" >
                            <CountUp start = {0} end = {population} duration = {2.5} separator="," />                            
                        </Typography>
                        <Typography color="textSecondary">Region</Typography>
                        <Typography variant="body2">{region}</Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards