import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers, toggleUser } from './../../store/actions';
import Header from './Header';
import TableRow from './Table';
import HeaderTab from './../Tab/HeaderTab';
import FooterContainer from './../Footer/FooterContainer';
import './Table.css';

const List = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.global.users);
    const checkedUser = useSelector((state) => state.global.checkedUser);

    useEffect(() => {
        if(!users) dispatch(getUsers(1));
    })


    if(!users) return 'Loading ...';
    
    const handleCheckUser = (id) => {
      dispatch(toggleUser(id))
    }
    return (
      <>
        <div className='table_view'>
          <HeaderTab />
        <table>
          <thead>
          <tr key={"header"} className="table_header">
            <Header />
          </tr>
          </thead>
          <tbody>
          {users.map((item) => (
            <tr key={item.id} className="table_body">
              <TableRow 
                item={item} 
                handleCheckUser={handleCheckUser} 
                checkedUser={checkedUser}
              />
            </tr>
          ))}
          </tbody>
        </table>
        </div>
        <FooterContainer />
      </>
    );
}

export default List;