import './Header.css';
import icons from './../../icons/Header.svg';

const Header = () => {
    return (
        <div className='header'>
            <img className='header_icons' alt='' src={icons} />
        </div>
    )
    
}
export default Header;