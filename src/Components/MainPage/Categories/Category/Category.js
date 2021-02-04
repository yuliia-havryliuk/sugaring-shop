import s from "./Category.module.css";

const Category=()=>{
    return(
        <section className={s.categories}>
            <div className={s.sectionTitle}>Воскоплави</div>
            <div className={s.sectionBlock}>
                <div className={s.sectionItem}><img src="https://via.placeholder.com/314x381.png"/></div>
                <div className={s.sectionItem}><img src="https://via.placeholder.com/314x381.png"/></div>
                <div className={s.sectionItem}><img src="https://via.placeholder.com/314x381.png"/></div>
            </div>
            <div className={s.sectionBlock}>
                <div className={s.sectionItem}><img src="https://via.placeholder.com/314x381.png"/></div>
                <div className={s.sectionItem}><img src="https://via.placeholder.com/314x381.png"/></div>
                <div className={s.sectionItem}><img src="https://via.placeholder.com/314x381.png"/></div>
            </div>
        </section>
    )
}


export default Category