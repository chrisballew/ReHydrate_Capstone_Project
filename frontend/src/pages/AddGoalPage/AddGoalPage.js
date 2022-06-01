import React from "react"
import { useNavigate } from "react-router-dom"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


const AddGoalPage = () => {
    const [user, token] =  useAuth()


    return (
        <div className="container">
            <h1>Setting goals is the key to success! You can start a new one here!</h1>
            <form className="form" onSubmit={handleSubmit}>
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
            name="ouncegoal"
            value={formData.ounce_goal}
            onChange={handleInputChange}/>
            
          </form>
        </div>
            
    )
}

export default AddGoalPage