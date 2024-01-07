import './../assets/scss/requiryStyle.scss'
import Button from "./../components/common/Button.jsx";
import imgDefault from './../assets/images/imageDefault.png'
export default function Inquiry(props) {
  return (
    <div className="requiry">
      <div className="bg-img">
        <img src={imgDefault} alt="" />
        <div className="content-btn">
        <Button text={'法人様'} style={{'fontWeight': "bold"}} />
        <Button text={'個人様'} style={{'fontWeight': "bold"}} />
        </div>
      </div>
    </div>
  )
}
