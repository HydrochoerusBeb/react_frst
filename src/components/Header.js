import Logo from '../images/logo copy 1.png'
import PictureSect from './PictureSect'
import DinoComponent from '../images/din 1.svg'

function Header(){

    let src = DinoComponent 
    let menu_list = ['О нас', 'Услуги', 'Rent']

    let data = [{id:1, rowParam: 'row', img: DinoComponent, title:'Веломастерская “Велозар”', text:'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.', bgc: 'beige', classNme: 'header_image'}]

    return(
        <>
            <header className="header">
                <img className="header__logo" src={Logo} ></img>
                <ul className="header__menu-list">
                        {
                            menu_list.map((el, ind) => <li key={ind}>{el}</li>)
                        }
                </ul>
                <button className="header__button">
                        Связаться
                </button>
            </header>
            {data.map((el) => <PictureSect 
                rowParam = {el.rowParam}
                img = {src}
                title = {el.title}
                text = {el.text}
                bgc = {el.bgc}
                classNme={el.classNme}
            />)}


        </>
    )
}

export default Header