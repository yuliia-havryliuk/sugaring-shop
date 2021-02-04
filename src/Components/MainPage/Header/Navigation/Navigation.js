import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

const Navigation =()=>{
    return(
        <nav className={s.nav}>
            <a className={s.navLink} href="tel:380999999090">
                <div className={s.phone}> +38 (099) 999 90 90</div></a>
            <a className={s.navLink} href="tel:380999999090">
                <div className={s.phone}> +38 (099) 999 90 90</div></a>
            <a className={s.navLink}><NavLink to="/details" activeClassName={s.activeLink}>Оплата і доставка</NavLink></a>
            <a className={s.navLink}><NavLink to="/contact" activeClassName={s.activeLink}>Контакт</NavLink></a>
            <a className={s.navLink}  href="#">Search</a>
        </nav>
    )
}

export default Navigation