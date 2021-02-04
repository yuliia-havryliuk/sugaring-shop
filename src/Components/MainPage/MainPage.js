import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Categories from "./Categories/Categories";
import NewContent from "../NewContent/NewContent";
import RecommendContent from "../RecommendContent/RecommendContent";
import s from './MainPage.module.css'

const MainPage =()=>{
    return(
        <div className={s.appWrapperContent}>
            <Intro/>
            <Categories/>
            <NewContent/>
            <RecommendContent/>
        </div>
    )
}
export default MainPage