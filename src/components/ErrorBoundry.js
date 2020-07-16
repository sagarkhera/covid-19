import React, {Component} from 'react';

class ErrorBoundry extends Component{

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    render(){
        if(this.state.hasError){
        return <h3>Country '{this.props.country}' not found in records. Please reload page & try again!</h3>
        }
        else{
            return this.props.children;
        }
    }

}

export default ErrorBoundry