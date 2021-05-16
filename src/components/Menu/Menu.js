import './Menu.css';
import { MenuTiles } from '../../files/menuTiles';

const Menu = () => {
    return (
        <div className='menu_tab'>
            <div className='tab_header'></div>
            {MenuTiles.map((tile) => {
                return(
                <div key={tile.id} className="tile_container">
                    <div className="tile_icon"> 
                        <img  src={tile.imgSrc} alt=''/> 
                    </div>
                    <div className="tile_title"> 
                        {tile.title} 
                    </div>
                   
                </div>
                )
            })}
        </div>
    )
}

export default Menu;