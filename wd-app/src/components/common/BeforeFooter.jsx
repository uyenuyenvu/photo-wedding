import '../../assets/scss/footerStyle.scss'
import CardContact from "../shareComponent/CardContact";
import card3 from "../../assets/images/top/card3.png";
import card1 from "../../assets/images/top/card1.png";
import card4 from "../../assets/images/top/card4.svg";
import card2 from "../../assets/images/top/card2.png";
import bfFooter1 from "../../assets/images/bfFooter1.svg";
import bfFooter2 from "../../assets/images/bfFooter2.svg";

export default function BeforeFooter(props) {
  return <>
    <div className="BeforeFooterWrap">
      <div className="cardsContact">
        <div className="itemCardContact">
          <CardContact
            thumbnail={card2}
            txtButton1={'衣装'}
            description={'流行に敏感な花嫁の憧れの世界観を叶えるため_こだわりの衣装を豊富に取り揃えております'}
            txtButton={'詳しくはこちら'}
            url={'/dress'}

          ></CardContact>
        </div>
        <div className="itemCardContact">
          <CardContact
            thumbnail={card1}
            txtButton1={'プロデュースクルー'}
            description={'ウェディングフォト専門のフォトグラファー_ヘアメイク_演出プロデューサーが多数在籍'}
            url={'/produce-crew'}
            txtButton={'詳しくはこちら'}
          ></CardContact>
        </div>
        <div className="itemCardContact">
          <CardContact
            thumbnail={card3}
            txtButton1={'レタッチ_アルバム'}
            description={'流行に敏感な花嫁の憧れの世界観を叶えるため_こだわりの衣装を豊富に取り揃えております'}
            txtButton={'詳しくはこちら'}
            url={'/retouch-album'}
          ></CardContact>
        </div>
        <div className="itemCardContact">
          <CardContact
            thumbnail={card4}
            txtButton1={'コンセプト'}
            description={'ウェディング演出_空間プロデュースの名集団が手掛けるこだわりのフォトウェディング'}
            url={'/concept'}
            txtButton={'詳しくはこちら'}
          ></CardContact>
        </div>
      </div>
      <div className="listBtnBF">
        <a href={'/Report'} ><img src={bfFooter1} alt=""/></a>
        <a href={'/FAQ'} ><img src={bfFooter2} alt=""/></a>
      </div>
    </div>
  </>;
}
