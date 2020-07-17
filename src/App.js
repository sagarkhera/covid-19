import React, {Component} from 'react';
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData,fetchCountryDetails} from './api';
import image from './images/corona.PNG';
import ErrorBoundry from './components/ErrorBoundry';

class App extends Component{
    
    state = {
        data: {},
        countryData: {},
        country:'',
        error: null
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        try{
            const fetchedData = await fetchData(country);
            const popData = await fetchCountryDetails(country);            
            this.setState({data: fetchedData, country: country,countryData:popData})
        }
        catch(error){
            console.log(error)
            this.setState({error});
        }
        
    }

    render(){
        const {data,country,countryData,error} = this.state;
        let card;
        let chart;
        if(data===undefined || countryData===undefined || error){
            card = <h1>Country '{country}' not found in records. Please reload page & try again with another country!</h1>
        }
        else{
            card = <Cards data={data} countryData = {countryData} country = {country}/>
            chart = <Chart data={data} country={country}/>
        }
        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />   
                <ErrorBoundry country = {country}> 
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    {card}
                    {chart}
                </ErrorBoundry>
            </div>
        )
    }
}

export default App;
