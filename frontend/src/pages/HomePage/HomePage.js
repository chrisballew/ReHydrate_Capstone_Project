import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.log('User: ', user)
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  
  return (
    <div className="container">
      <h1>Welcome, {user.first_name}!</h1>
      <h3>Age: {user.age}</h3>
      <h3>Height: {user.height}</h3>
      <h3>Weight: {user.weight}</h3>
      <h3>BMI: {user.bmi}</h3>
      <h2>You need approx. {user.waterintake} ounces of water per day to stay healthy and hydrated!</h2>
      <h1></h1>
    </div>
  );
};

{/* <div className="container">
<h1>Home Page for {user.username}!</h1>
{cars &&
  cars.map((car) => (
    <p key={car.id}>
      {car.year} {car.model} {car.make}
    </p>
  ))}
</div> */}

export default HomePage;
