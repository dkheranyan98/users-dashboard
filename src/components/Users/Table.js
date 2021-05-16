import './Table.css';
import { useDispatch } from 'react-redux';
import { formatDate } from './../../helpers/helpers';
import { getUsers, setPage } from './../../store/actions';
import Email from "./../../icons/Email.svg";
import Delete from './../../icons/Delete.svg';

const TableRow = ({ item, handleCheckUser, checkedUser }) => {
    const dispatch = useDispatch();

    const handleChange = () => {
        if(!checkedUser) {
            handleCheckUser(item.id)
        } else {
            handleCheckUser(null)
        }
    }

    const handleRemove = () => {
        fetch(`https://brainstorm-interview-task.herokuapp.com/users/${item.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }
                dispatch(setPage(1))
                dispatch(getUsers(1))
            })
            .catch(error => {
                console.log(error)
            })
    }

    const disabled = checkedUser && checkedUser !== item.id ? true : false;
    return (
    <>
        <td> <input type="checkbox" onChange={handleChange} disabled={disabled}/> </td>
        <td> <img src={item.photo} className="user_img" alt=''/> </td>
        <td> {item.name} </td>
        <td> {item.location} </td>
        <td> {formatDate(item.registeredDate)} </td>
        <td> {formatDate(item.lastActiveDate)} </td>
        <td> <img src={Email} alt=''/> </td>
        <td> <img src={Delete} alt='' onClick={() => handleRemove()}/> </td>
    </>
    );
}

export default TableRow;