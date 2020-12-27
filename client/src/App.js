import {  Navbar, Allbeer } from "./components";
import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_BEERS_FROM_EXTERNAL_API = gql`
  {
    beers {
      name
      tagline
      id
      image_url
      description
      first_brewed
    }
  }
`;
const App = () => {
const { loading, error, data } = useQuery(GET_BEERS_FROM_EXTERNAL_API);
console.log(data);
if (error) return <h1>Something went wrong!</h1>;
if (loading) return <h1>Loading...</h1>;
 
  return (
    <div>
      <Navbar />
     <Allbeer data={data}/>
    </div>
  );
}

export default App
