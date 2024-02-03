import "../../assets/scss/produceCrewStyle.scss";
import bgTitle from "../../assets/images/bg-title.svg";
import img1 from "../../assets/images/produce-crew.jpg";
import img2 from "../../assets/images/produce-crew-2.jpg";
import BeforeFooter from "../../components/common/BeforeFooter";

export default function ProduceCrew() {
  return (
    <>
    <div className="produce-crew">
      <div className="py-5" id="color-bg">
        <div className="title-page">
          <img src={bgTitle} alt="" />
          <div className="contentTitle">
                <div className="title">PRODUCE CREW</div>
            <div className="sub-title">-プロデュースクルー-</div>
          </div>
        </div>
        <div className="text-page">
          ウェディングフォト専門のフォトグラファーやヘアメイク、演出プロデューサーが多数在籍！
          <br />
          スペシャリストたちによる、BLANZでしか体験できない撮影サービスを提供いたします。
        </div>
      </div>
      <div className="content" id="color-bg">
        <div className="title">
          <div className="text">PHOTOGRAPHER</div>
          <div className="sub-title">
            <div className="text-start">フォトグラファー</div>
            <div>画像クリックでプロフィールを確認できます</div>
          </div>
        </div>
        <div className="list-img">
          <div className="item">
            <img src={img1} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <div className="text">HAIR MAKE</div>
          <div className="sub-title">
            <div className="text-start">ヘアメイク</div>
            <div>画像クリックでプロフィールを確認できます</div>
          </div>
        </div>
        <div className="list-img">
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
        </div>
      </div>
      <div className="content" id="color-bg">
        <div className="title">
          <div className="text">PRODUCER</div>
          <div className="sub-title">
            <div className="text-start">プロデューサー</div>
            <div>画像クリックでプロフィールを確認できます</div>
          </div>
        </div>
        <div className="list-img">
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title-img">名前太郎</div>
          </div>
        </div>
      </div>
    </div>
  <BeforeFooter />
</>
  );
}
