import '../../assets/scss/footerStyle.scss'
import Button from "./Button.jsx";

export default function Header(props) {
  return <div className={'footerWrap'}>
    <div className="listButton">
      <div className="itemButton">
        <Button text={'会社概要'} style={{fontWeight: "bold"}} />
      </div>
      <div className="itemButton">
        <Button text={'サービス紹介'} style={{fontWeight: "bold"}}/>
      </div>
      <div className="itemButton">
        <Button text={'プラン一覧'} style={{fontWeight: "bold"}}/>
      </div>
      <div className="itemButton">
        <Button text={'お問い合わせ'} style={{fontWeight: "bold"}}/>
      </div>
    </div>
    <div className={'textCopyRight'}>
      Copyright©AKI ENTERPRISE Co.,Ltd. ALL Rights Reserved
    </div>
  </div>;
}
