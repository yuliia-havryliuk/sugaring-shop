import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return(
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.headerInfo}>
                    <div>
                       <NavLink to="/">
                        <img className={s.logoImg} src="https://cdn4.iconfinder.com/data/icons/cosmetology-set/52/cosmetology_vol2-15-512.png"/>
                       </NavLink>
                    </div>
                    <Navigation/>
                </div>
            </div>
        </header>
    )
}
export default Header;