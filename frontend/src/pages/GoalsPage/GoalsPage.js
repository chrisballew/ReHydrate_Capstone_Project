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
        
        fetchGoals();
      }, [token]);

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
      const changeCheckBox = async(e,id)=>{
        console.log("We changed it ")
        let response = await axios.patch(`http://127.0.0.1:8000/api/rehydrate/complete/${id}/`, {"completed" : e.target.checked}, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        fetchGoals()
      }

    //state variable for goals just like cars
    //useEffect that querys DB to get user's goals... just like fetchCars in useEffect
    //Use conditional rendering to map through goals once it has been set... just like cars

    return (
        <div className="Goals">
            <ul>
                {goals &&
                    goals.map((goal) => (
                        <body>
                            <p key={goal.id}>
                                Name: {goal.goalname} Notes: {goal.notes} Ounces: {goal.ounce_goal} Due: {goal.due_date} {goal.completed}
                            </p>
                            <label className="checkbox" for="myCheckboxId">
                                Completed?
                                <input className="checkbox__input" type="checkbox" checked={Boolean(goal.completed)} name="myCheckboxName" id="myCheckboxId" onClick={e =>changeCheckBox(e, goal.id)}></input>
                                <div className="checkbox__box"></div>
                            </label>
                        </body>
                    ))}
            </ul>
        </div>
    )
}

// function myFunction() {
//     var checkbox = document.getElementById("MyCheckboxId");
//     var text = document.getElementById("text");

//     if (checkbox.checked == true){
//         text.style.display = "block";
//     }   else {
//         text.style.display = "none";
//     }
//}
export default GoalsPage