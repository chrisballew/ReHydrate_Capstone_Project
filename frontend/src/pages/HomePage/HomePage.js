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
  const [goals, setGoals] = useState([]);
  const [ounceTotal, setOunceTotal] = useState(0)
  const [ounceGoal, setOunceGoal] = useState(0)
 
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

useEffect(() => {
  const fetchGoals = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/rehydrate/newgoal", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log('response.data from goals useEffect', response.data)
      setGoals(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  fetchGoals();
}, [token]);

//useEffect to add all goals together
useEffect(() =>{
  if(goals.length > 0){
    let ounceArray = goals.map((goal) => {
      return goal.ounce_goal
    });
    let sum = ounceArray.reduce((total, element) => {
      return total + element
    })
    setOunceGoal(sum)
    //map through goals, add up the ounceGoals property of each, then pass final sum into setOunceTotal()

  }
}, [goals])

//useEffect to add only completed goals
//filter through goals first to just find completed ones
//then use map and reduce like previous useEffect
useEffect(() =>{
  if(goals.length > 0){
    let completedGoalArray = goals.filter((goal) => {
      if(goal.completed === true){
        return true;
      }
      else{
        return false;
      }});
      let completedOunceArray = completedGoalArray.map((goal) => {
        return goal.ounce_goal
      })
        
        let sum = completedOunceArray.reduce((total, element) => {
          return total + element
      })
      console.log('completedGoalArray in filter', completedGoalArray)
      console.log('completedOunceArray in reduce', completedOunceArray)
      setOunceTotal(sum)
  }}
, [goals])

  
  return (
    <div className="container">
      {console.log('goals variable inside return', goals)}
      <h1>Welcome, {user.first_name}!</h1>
      <h3>Age: {user.age}</h3>
      <h3>Height: {user.height}</h3>
      <h3>Weight: {user.weight}</h3>
      <h3>BMI: {user.bmi}</h3>
      <h2>You need approx. {user.waterintake} ounces of water per day to stay healthy and hydrated!</h2>
      <h1>Your Hydration Score: { ounceTotal }/{ ounceGoal } </h1>
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


//let name = "bob"
//console.log(name)

//setName("bob")
//console.log(name)

//setOunceTotal(sum)