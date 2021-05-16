import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setPage, toggleUser } from './../../store/actions';
import './Pagination.css';
const PaginationContainer = () => {
    const dispatch = useDispatch()
    const page = useSelector((state) => state.global.page)

    const handlePaginate = (event, value) => {
        dispatch(getUsers(value))
        dispatch(setPage(value))
        dispatch(toggleUser(null))
    }
    return (
        <div className="pagination_container">
            <div> Changer </div>
            <div>
            <Pagination count={10} page={page} color="primary"  shape="rounded" onChange={handlePaginate}/>
            </div>
        </div>
      );
}

export default PaginationContainer;