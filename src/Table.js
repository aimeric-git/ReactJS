import React from 'react'; 

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {props.users.map((u) => (
                <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.job}</td>
                    <td>
                        <button onClick={ () => props.editRow(u)} >Edit</button>
                        <button onClick={ () => props.handleDelete(u.id)} >Delete</button>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
    )
}
export default Table; 