import PictureSect from "./PictureSect"
import Bicycle from '../images/linkedin-sales-navigator-402831.png'


function Rent(){
    let data = [{id:1, rowParam: 'row-reverse', img: Bicycle, title:'Прокат велосипедов', text:'У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!', bgc: 'white', classNme: 'Rent_image'}]

    return(
        <>
        {data.map((el) => <PictureSect 
            rowParam = {el.rowParam}
            img = {el.img}
            title = {el.title}
            text = {el.text}
            bgc = {el.bgc}
            classNme = {el.classNme}
        />)}
        </>
    )
}

export default Rent