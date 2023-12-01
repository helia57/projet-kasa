import Datas from "../../assets/Logements/Datas"
import Cards from "../Cards"




export default function Gallery() {

    return (
        <div className='gallery-wrapper'>
            {Datas.map(data => {
                return (
                    <Cards
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </div>
    )
}
