import './Tab.css';
import { useSelector, useDispatch } from 'react-redux';
import { setEdit } from './../../store/actions';

const HeaderTab = () => {
    const dispatch = useDispatch();
    const checkedUser = useSelector((state) => state.global.checkedUser);
    const edit = useSelector((state) => state.global.edit);

    const handleClick = () => {
        if(checkedUser) {
            dispatch(setEdit('editUser'))
        } else {
            dispatch(setEdit('newUser'))
        }
    } 

    return (
        <div className="header_tab">
            <p> {edit === 'editUser' ? 'Edit User' : edit === 'newUser' ? 'New User' :  'All Users'} </p>
            <div className="header_divider"> </div>
            { 
            edit !== 'editUser' && edit !== 'newUser' && 
                <button onClick={handleClick}> 
                    {checkedUser ? 'Edit User' : 'New User' } 
                </button>
            }
        </div>
    )
}
export default HeaderTab;