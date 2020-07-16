import React, {Component} from 'react';

import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData,fetchCountryDetails} from './api';

import image from './images/corona.PNG';

class App extends Component{
    
    state = {
        data: {},
        countryData: {},
        country:''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        const popData = await fetchCountryDetails(country);
        this.setState({data: fetchedData, country: country,countryData:popData})
    }

    render(){
        const {data,country,countryData} = this.state;
        
        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data} countryData = {countryData} country = {country}/>                
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
