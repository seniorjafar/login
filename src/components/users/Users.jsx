import React, { useEffect, useState } from 'react'
import axios from '../../api'
import "./Users.scss"

const Users = () => {
    const [usersData, setUsersData] = useState(null)
    useEffect(() => {
        axios
            .get('/users/search/?limit=1000')
            .then(res => setUsersData(res.data.data.users))
    }, [])
    console.log(usersData);
    return (
        <section>
            <h2 className=''>Users</h2>
            <div className='user'>
                <table id="customers">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    {usersData?.map(user => (
                        <tr>
                                <td>{user.ID}</td>
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                            </tr>
                    ))}
                        
                    </table>
            </div>
        </section>
    )
}

export default Users
