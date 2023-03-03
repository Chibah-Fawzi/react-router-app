import React, { useEffect, useState } from 'react'

export default function Admin() {
    const [users, setUsers] = useState([]);

    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <h1>ADMIN</h1>
            {users.map(user => (
                <h1>{user.name}</h1>
            ))}
        </div>
    )
}
