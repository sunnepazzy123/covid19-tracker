import React, { Component } from 'react'
import  { Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import  coronaImage  from "./images/image.png";
import  logo  from "./images/wdtlogo.png";


class App extends Component {

  state = {
    data: { },
    country: "",
  }


  async componentDidMount(){
    const fetchedData = await fetchData();
      // console.log("from app component ", fetchedData);

      this.setState({data: fetchedData});
  }

  handleCountryChange = async (country )=>{
    const fetchedData = await fetchData(country)
    // console.log(fetchedData)
    this.setState({ data: fetchedData, country: country})
    //fetch fetchData
    //fecth state
  }


  render() {

    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <img className={styles.logo} src={logo} alt="Logo" />
        <p>Powered by WireDev</p>

      </div>
    )
  }
}



export default App;