import React, {Component} from 'react';

class SingleCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        console.log("Country prop", this.props)
        return ( 
            <div key={this.props.country.alpha3Code}>
                <div>
                    <img width="100" src={this.props.country.flag} />
                </div>
                <div>
                    Name: {this.props.country.name}
                </div>
                <div>
                    Population: {this.props.country.population}
                </div>
                <div>
                    Region: {this.props.country.region}
                </div>
                <div>
                    Capital: {this.props.country.capital}
                </div>
            </div>
         );
    }
}
 
export default SingleCountry;