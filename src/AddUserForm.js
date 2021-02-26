import React, { useState } from 'react'; 

const AddUserForm = (props) => {
    const initialForm = { id: null, name: '', job: '' };
    const [user, setUser] = useState(initialForm); 

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setUser({...user, [name]: value}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
            if (!user.name || !user.job) return 

        props.addUser(user); 
        setUser(initialForm); 
    }
    return (
        <form onSubmit={handleSubmit} >
            <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={user.name} 
                    onChange={handleChange}  /> <br></br>
            <label>Job</label>
                <input 
                    type="text"
                    name="job"
                    value={user.job}     
                    onChange={handleChange} /> <br></br>
            <button type="submit">Send</button>
        </form>
    )
}
export default AddUserForm; 