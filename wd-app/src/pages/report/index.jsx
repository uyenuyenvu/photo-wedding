import '../../assets/scss/reportStyle.scss'
import bgTitle from '../../assets/images/bg-title.svg'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import BeforeFooter from "../../components/common/BeforeFooter";
import {useState} from "react";
export default function CustomerReport() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
    <div className={'customer-report'}>
        <div className="title-page">
            <img src={bgTitle} alt="" />
            <div className={'contentTitle'}>
                <div className="title">CUSTOMER REPORT</div>
                <div className="sub-title">-お客様レポート-</div>
            </div>
        </div>
        <div className='text-page'>BLANZでウエディングフォト撮影を行ったおふたりにご感想をいただきました。</div>
        <div className="list-event">
            <div className="item">
                <img src={img1} alt="" />
                <div className="content">
                    <div className="content-item">オープニングキャンペーン　特賞のお客様</div>
                    <div className='read-more'>read more</div>
                </div>
            </div>
            <div className="line"></div>
            <div className="item">
                <img src={img2} alt="" />
                <div className="content">
                    <div className="content-item">ディズニー好きなおふたりが選ぶ素敵シーン</div>
                    <div className='read-more'>read more</div>
                </div>
            </div>
            <div className="line"></div>
            <div className="item">
                <img src={img3} alt="" />
                <div className="content">
                    <div className="content-item">ご好評いただいているシーン♪</div>
                    <div className='read-more'>read more</div>
                </div>
            </div>
        </div>
        <div className="pagination">
          {[1,2,3,4].map((page, i) => {
            return ( <div key={i} className={`index ${page === currentPage ? 'select' : ''}`}>1</div>
            )
          })}
            <div className="index">{`>>`}</div>
        </div>

    </div>
  <BeforeFooter />
</>
  );
}
