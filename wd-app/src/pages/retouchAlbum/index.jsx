import "../../assets/scss/retouchAlbumStyle.scss";
import bgTitle from "../../assets/images/bg-title.svg";
import retouch1 from "../../assets/images/retouch1.jpg";
import retouch2 from "../../assets/images/retouch2.jpg";
import retouch3 from "../../assets/images/retouch3.jpg";
import retouch4 from "../../assets/images/retouch4.jpg";
import retouch5 from "../../assets/images/retouch5.jpg";
import hemTop from "../../assets/images/hem-top-retouch.svg";
import hemBottom from "../../assets/images/hem-bottom-retouch.svg";
import hemTop2 from "../../assets/images/hem-top-retouch-2.svg";
import hemBottom2 from "../../assets/images/hem-bottom-retouch-2.svg";
import BeforeFooter from "../../components/common/BeforeFooter";
export default function RetouchAlbum() {
  return (
    <>
    <div className="retouch-album">
      <div className="py-5" id="color-bg">
        <div className="title-page">
          <img src={bgTitle} alt="" />
          <div className="contentTitle">
                <div className="title">RETOUCH＆ALBUM</div>
            <div className="sub-title">-リタッチ＆アルバム-</div>
          </div>
        </div>
        <div className="text-page">
          何年経っても見返したくなるハイクオリティなアルバム。おふたりの魅力を引き出すビューティーレタッチもお任せください。
        </div>
      </div>
      <div className="box" id="color-bg">
        <div className="title">
          <div className="text">ビューティーレタッチ</div>
          <div className="sub-title">
            さらなる美しさを目指すおふたりにおすすめです。
          </div>
        </div>
        <div className="content">
          <img src={retouch1} className="bg-content" alt="" />
          <div className="detail-content flex">
            <div className="describe">
              <img src={hemTop} className="top" alt="" />
              <div className="text">美肌補正</div>
              <img src={hemBottom} className="bottom" alt="" />
              <div className="introduce">
                小顔に見えるヘアメイクに加え、さらにすっきりとした憧れのフェイスラインはフォトレタッチにて実現可能に！
              </div>
            </div>
            <div className="img flex">
              <div className="item">
                <img src={retouch2} alt="" />
                <div className="button">before</div>
              </div>
              <div className="item">
                <img src={retouch2} alt="" />
                <div className="button">after</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={retouch3} className="bg-content" alt="" />
          <div className="detail-content flex">
            <div className="describe">
              <img src={hemTop} className="top" alt="" />
              <div className="text">ボディラインをすっきりと</div>
              <img src={hemBottom} className="bottom" alt="" />
              <div className="introduce">
                ポーズやアングルを工夫した撮影で美しく撮ることはできますが、レタッチを併用することで気になる部分も違和感なく自然にすっきりと見せることが出来ます。
              </div>
            </div>
            <div className="img flex">
              <div className="item">
                <img src={retouch4} alt="" />
                <div className="button">before</div>
              </div>
              <div className="item">
                <img src={retouch4} alt="" />
                <div className="button">after</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box" id="color-bg">
        <div className="content">
          <img src={retouch5} className="bg-content" alt="" />
          <div className="detail-content flex">
            <div className="describe">
              <img src={hemTop} className="top" alt="" />
              <div className="text">フェイスライン調整</div>
              <img src={hemBottom} className="bottom" alt="" />
              <div className="introduce">
                小顔に見えるヘアメイクに加え、さらにすっきりとした憧れのフェイスラインはフォトレタッチにて実現可能に！
              </div>
            </div>
            <div className="img flex">
              <div className="item">
                <img src={retouch2} alt="" />
                <div className="button">before</div>
              </div>
              <div className="item">
                <img src={retouch2} alt="" />
                <div className="button">after</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="album">
        <div className="img"></div>
        <div className="describe">
          <img src={hemTop2} className="top" alt="" />
          <div className="text-1">デザインアルバム</div>
          <img src={hemBottom2} className="bottom" alt="" />
          <div className="text-2">
            一生に一度の想い出を <br />
            特別な形で残しませんか？
          </div>
          <div className="text-3">
            いくらでもデータを残せる今の時代だからこそ、特別な記念のウェディングフォトは、上質なアルバムに現像して、新居のインテリアの一部にしたいという声をたくさんいただきます。
            <br />
            時が経つほど価値が生まれるアルバムを、いつでも手に取れる形にして残しましょう。
          </div>
        </div>
      </div>
    </div>
      <BeforeFooter />
    </>
  );
}
