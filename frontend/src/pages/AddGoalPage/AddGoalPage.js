import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
  goalname: "",
  notes: "",
  ounce_goal: "",
  due_date: "",
};


const AddGoalPage = () => {
    const [user, token] =  useAuth();
    const [formData, handleInputChange, handleSubmit] =useCustomForm(initialValues, postNewGoal)
    const navigate = useNavigate()

    async function postNewGoal(){
      try {
          let response = await axios.post("http://127.0.0.1:8000/api/rehydrate/newgoal", formData, {
            headers: {
              Authorization: 'Bearer ' + token
            }
          })
          navigate("/")
      } catch (error) {
        console.log(error.message)

      }
    }


    return (
        <div>
            <h1>Setting goals is the key to success! You can start a new one here!</h1>
            <form className="goalform" onSubmit={handleSubmit}>
                <label> 
                What do you want to call this goal: {" "}
                </label>
                <input
                 type="text"
                 name="goalname"
                 value={formData.goalname}
                 onChange={handleInputChange}/>

            <label>
            Add notes here: {" "}
            </label>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}/>
        
        <label>
          Ounce Goal:{" "}
          </label>
          <input
            type="text"
            name="ounce_goal"
            value={formData.ounce_goal}
            onChange={handleInputChange}/>
            
            <label>
          Due Date:{" "}
          </label>
          <input
            type="date"
            name="due_date"
            value={formData.due_date}
            onChange={handleInputChange}/>
            
            <button>Add!</button>
          </form>
        </div>
            
    )
}

export default AddGoalPage