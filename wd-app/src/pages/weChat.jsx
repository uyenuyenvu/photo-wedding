import './../assets/scss/weChatStyle.scss'
import imgQr from './../assets/images/wechat_QR.png'
export default function weChat(props) {
  return (
    <div className="wechat">
        <div className="title">Contact</div>
        <div className="description">サービス等に関するお問い合わせはこちらからご送信ください。</div>
        <div className="qr">
          <img src={imgQr} alt="" />
        </div>
    </div>
  );
}
