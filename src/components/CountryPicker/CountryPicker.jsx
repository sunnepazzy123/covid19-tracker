import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import {countries} from "../../api"

import styles from "./CountryPicker.module.css";



const CountryPicker = ({ handleCountryChange }) => {

  const [ fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(()=> {
    const fetchAllCountries = async ()=>{
      
          const fetchedCountries = await countries();
              setFetchedCountries(fetchedCountries);

      // setFetchedCountries (await countries)      
    }

    fetchAllCountries();


  }, [setFetchedCountries]);


  // console.log(fetchedCountries)

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value) }>
        <option value="">Global </option>
          {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
       
      </NativeSelect>
    </FormControl>
  );
}



export default CountryPicker;