import '../../../assets/scss/individualsStyle.scss'
import Button from "../../../components/common/Button.jsx";
import imgDefault from '../../../assets/images/imageDefault.png'
export default function Individuals(props) {
  return (
    <div className="individuals">
      <div className="bg-img">
        <img src={imgDefault} alt="" />
        <div className="content-btn">
        <Button text={'メールでお問い合わせ'} style={{'fontWeight': "bold"}} />
        <Button text={'WeChatでお問い合わせ'} style={{'fontWeight': "bold"}} />
        </div>
      </div>
    </div>
  )
}
