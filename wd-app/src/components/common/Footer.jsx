import "../../assets/scss/footerStyle.scss";
import Button from "./Button.jsx";
import email from "../../assets/images/menu_email.svg";
import phone from "../../assets/images/menu_phone.png";
import insta from "../../assets/images/menu_insta.svg";
import youtube from "../../assets/images/menu_yt.svg";
import tiktok from "../../assets/images/menu_tt.svg";
import menu_ from "../../assets/images/menu_.png";
import { useTranslation } from "react-i18next";

export default function Header(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="contactWrap">
        <div className="contactContent">
          <div className="titleWrap">
            <div className="title">ご予約・お問い合わせ</div>
            <div className="sub">流行に敏感な花嫁の憧れの世界観を叶えるため、</div>
            <div className="sub">こだわりの衣装を豊富に取り揃えております。</div>
          </div>
          <div className="contactTop">
            <div className="itemContact">
              <div className="nameContact">TEL</div>
              <div className="imageContact">
                <img className={'imgMain'} src={phone} alt="" />
              </div>
              <div className="desContact">
                <div className="title">
                  TEL:06-6616-9932
                </div>
                <div className="sub">営業時間:10:00~19:00</div>
                <div className="sub">火曜定休日祝祭日は営業</div>
              </div>
            </div>
            <div className="itemContact">
              <div className="nameContact">MAIL</div>
              <div className="imageContact">
                <img className={'imgMain'} src={email} alt="" />
              </div>
              <div className="buttonContact">
                <div className="btnContact">フォームはこちら</div>
              </div>
              <div className="desContact">
                <div className="sub">※デンライン相談予約も承っております。</div>
              </div>
            </div>
          </div>
          <div className="itemContact">
            <div className="nameContact">SNS</div>
            <div className="imageContact">
              <a href="https://www.instagram.com/blanzshinsaibashi/"><img src={insta} alt="" /></a>
              <a href="https://www.youtube.com/@blanzshinsaibashi8198"><img src={youtube} alt="" /></a>
              <a href="https://www.tiktok.com/@blanz_shinsaibashi"><img src={tiktok} alt="" /></a>
              <a href=""><img src={menu_} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={"footerWrap"}>
        <div className="listMenuBot">
          <div className="itemMenuBot">
            <a href="/company-profile">会社概要</a>
          </div>
          <div className="itemMenuBot">
            <a href="/privacy-policy">プライバシーポリシー</a>
          </div>
        </div>
        <div className={"textCopyRight"}>
          Copyright©AKI ENTERPRISE Co.,Ltd. ALL Rights Reserve
        </div>
      </div>
    </>
  );
}
