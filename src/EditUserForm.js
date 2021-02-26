import React, { useEffect, useState } from 'react'; 

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser); 

    const handleInputChange = (e) => {
        const {name, value} = e.target; 
        setUser( {...user, [name]: value} );
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.updateUser(user.id, user); 
    }
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    return (
        <form onSubmit={handleSubmit} >
            <label>Edit Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={user.name} 
                    onChange={handleInputChange} /><br></br>
            <label>Edit Job</label>
                <input 
                    type="text" 
                    name="job"
                    value={user.job}
                    onChange={handleInputChange} /><br></br>
            <button>Confirm</button>
            <button onClick={ () => props.setEditing(false)}>Cancel</button>
        </form>
    )
}
export default EditUserForm; 