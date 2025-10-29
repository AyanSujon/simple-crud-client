import React from 'react';

const Users = () => {
    const handleAddUser = (e)=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log("User add", name, email);
        // save this user data to the database (via server)
        const newUser = {name, email};


        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('after saving user', data);
        })


        

    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <br/>
                <input type="email" name='email' id='' placeholder='enter your email' />
                <br />
                <input  type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Users;