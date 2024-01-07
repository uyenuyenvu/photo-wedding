import '../../assets/scss/Card.scss'
import Button from "../common/Button.jsx";

export default function Card(props) {
    return <div className={'cardWrap'}>
        <div className="thumbnail">
            <img src={props.thumbnail} alt="" className={'imgThumbnail'}/>
        </div>
        <div className={'contentCard'}>
            <div className="titleCard">{props.title}</div>
            <div className="descriptionCard">{props.description?.map((item)=>{
                return <p className={'itemDes'}>{item}</p>
            })}</div>
            <div className="buttonCard">
                <Button text={props.txtButton} />
            </div>
        </div>
    </div>;
}
