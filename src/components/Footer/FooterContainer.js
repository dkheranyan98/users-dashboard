import PaginationContainer from './Pagination';
import AllUsers from './AllUsers';
import './Pagination.css'
const FooterContainer = () => {
    
    return (
        <div className="footer_container">
            <PaginationContainer />
            <AllUsers />
        </div>
    )
}

export default FooterContainer;