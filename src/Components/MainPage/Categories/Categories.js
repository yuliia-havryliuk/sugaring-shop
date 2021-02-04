import s from './Categories.module.css'
import {NavLink} from "react-router-dom";
const Categories =()=> {
    return(
        <section className={s.categories}>
                <div className={s.sectionTitle}>Категорії</div>
                <div className={s.categoriesItems}>
                    <a className={s.categoryItem}>
                        <NavLink to="/category/1">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Воскоплави</div>
                        </NavLink>
                    </a>
                    <a className={s.categoryItem}>
                        <NavLink to="/category/2">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Набори</div>
                        </NavLink>
                    </a>
                    <a className={s.categoryItem}>
                        <NavLink to="/category/3">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Цукрова паста</div>
                        </NavLink>
                    </a>
                    <a className={s.categoryItem}>
                        <NavLink to="/category/4">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Засоби до і після депіляції</div>
                        </NavLink>
                    </a>
                </div>
                <div className={s.categoriesItems}>
                    <a className={s.categoryItem} href="#">
                        <NavLink to="/category/5">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Аксесуари для депіляції</div>
                        </NavLink>
                    </a>
                    <a className={s.categoryItem} href="#">
                        <NavLink to="/category/6">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Кушетки</div>
                        </NavLink>
                    </a>
                    <a className={s.categoryItem} href="#">
                        <NavLink to="/category/7">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Пуфи і дивани</div>
                        </NavLink>
                    </a>
                    <a className={s.categoryItem} href="#">
                        <NavLink to="/category/8">
                        <img className={s.categoryItemImage} src="https://via.placeholder.com/250x160.png"/>
                        <div className={s.categoryItemTitle}>Етажерки</div>
                        </NavLink>
                    </a>
                </div>

        </section>
    )
}
export default Categories