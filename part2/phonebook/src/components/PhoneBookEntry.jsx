/* eslint-disable react/prop-types */
const Name = ({name, number, deleteEntry}) => {
    return <li>
        {name}, {number}
        <button onClick={deleteEntry}>Delete</button>
        </li>
}


export default Name