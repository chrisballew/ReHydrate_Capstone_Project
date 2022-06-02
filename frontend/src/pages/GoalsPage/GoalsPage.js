import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import axios from "axios"

const GoalsPage = () => {
    const [user, token] = useAuth();
    const [goals, setGoals] =useState();

    useEffect(() => {
        console.log('User: ', user)
        const fetchGoals = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/rehydrate/newgoal", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setGoals(response.data);
          } catch (error) {
            console.log(error.response.data);
          }
        };
        fetchGoals();
      }, [token]);

    //state variable for goals just like cars
    //useEffect that querys DB to get user's goals... just like fetchCars in useEffect
    //Use conditional rendering to map through goals once it has been set... just like cars

    return (
        <div className="Goals">
            <ul>
                {goals &&
                    goals.map((goal) => (
                        <p key={goal.id}>
                            {goal.goalname} {goal.notes} {goal.ounce_goal} {goal.due_date} {goal.completed}
                        </p>
                    ))}
            </ul>
        </div>
    )
}

export default GoalsPage