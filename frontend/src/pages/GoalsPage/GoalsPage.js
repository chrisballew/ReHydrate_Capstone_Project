import React from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const GoalsPage = () => {
    const [user, token] = useAuth()


    return (
        <div className="Goals">
            <ul>
                {user.Goal(data => (
                    <li key={data.id}>{data.goal}</li>
                ))}
            </ul>
        </div>
    )
}

export default GoalsPage