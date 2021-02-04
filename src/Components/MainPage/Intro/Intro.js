import s from './Intro.module.css'

const Intro =()=>{
    return(
        <div className={s.intro}>
                <div className={s.introContent}>
                    <img className={s.introImage} src="https://via.placeholder.com/1200x328.png"/>
                    <div className={s.introImages}>
                        <img className={s.introImageSmall} src="https://via.placeholder.com/350x206.png"/>
                        <img className={s.introImageSmall} src="https://via.placeholder.com/350x206.png"/>
                        <img className={s.introImageSmall} src="https://via.placeholder.com/350x206.png"/>
                    </div>
                </div>

        </div>
    )
}
export default Intro