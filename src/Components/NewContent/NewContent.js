import s from './NewContent.module.css'
const NewContent =()=>{
    return(
        <section className={s.categories}>
                <div className={s.sectionTitle}>Новинки</div>
                <div className={s.sectionBlock}>
                    <div className={s.sectionItem}><img src="https://via.placeholder.com/250x250.png"/></div>
                    <div className={s.sectionItem}><img src="https://via.placeholder.com/250x250.png"/></div>
                    <div className={s.sectionItem}><img src="https://via.placeholder.com/250x250.png"/></div>
                    <div className={s.sectionItem}><img src="https://via.placeholder.com/250x250.png"/></div>
                </div>
        </section>
    )
}

export default NewContent