import '../../assets/scss/dressStyle.scss'
import bgTitle from '../../assets/images/bg-title.svg'
import dress1 from '../../assets/images/dress1.jpg'
import dress2 from '../../assets/images/dress2.jpg'
import dress3 from '../../assets/images/dress3.jpg'
import dress4 from '../../assets/images/dress4.jpg'
import dress5 from '../../assets/images/dress5.jpg'
import dress6 from '../../assets/images/dress6.jpg'
import shirt1 from '../../assets/images/shirt1.jpg'
import shirt2 from '../../assets/images/shirt2.jpg'
import textTab4 from '../../assets/images/text-page-tab4.jpg'
import bgtop from '../../assets/images/top-bg-dress.svg'
import bgbottom from '../../assets/images/bottom-bg-dress.svg'
import React, { useState } from 'react';
import BeforeFooter from "../../components/common/BeforeFooter";
export default function Dress() {
    const [tab, setTab] = useState(1);
    const [textPage, setTextPage] = useState('ウェディングドレス・カラードレス');

    const listTab1 = [dress1,dress2,dress1,dress2,dress1,dress2,dress1,dress2,dress1,dress2,dress1,dress2,dress1,dress2]
    const listTab2 = [dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3,dress3]
    const listTab3 = [shirt1,shirt2,shirt1,shirt2,shirt1,shirt2,shirt1,shirt2,shirt1,shirt2,shirt1,shirt2,shirt1,shirt2]
    const listTab4 = [dress4,dress5,dress6,dress4,dress5,dress6,dress4,dress5,dress6,dress4,dress5,dress6,dress4,dress5,dress6,dress4]
    const [listTab, setListTab] = useState(listTab1);
    const handleTabClick = (tabId) => {
        setTab(tabId)
        switch (tabId) {
            case 1:
                setListTab(listTab1);
                setTextPage('ウェディングドレス・カラードレス');
            break;
            case 2:
                setListTab(listTab2);
                setTextPage('白無垢・色打掛');
            break;
            case 3:
                setListTab(listTab3);
                setTextPage('タキシード・紋付袴');
            break;
            case 4:
                setListTab(listTab4);
                setTextPage('オートクチュールドレス');
            break;
            default:
                setListTab(listTab1);
                setTextPage('ウェディングドレス・カラードレス');
                break;
        }

    };
    return (
      <>
    <div className='dress'>
        <div className="title-page">
            <img src={bgTitle} alt="" />
            <div className={'contentTitle'}>
                <div className="title">DRESS</div>
                <div className="sub-title">衣装</div>
            </div>
        </div>
        <div className='text-page'>流行に敏感な花嫁の憧れの世界観を叶えるため、こだわりの衣装を豊に取り揃えています。</div>
        <div className="tab">
                <button  onClick={() => handleTabClick(1)} className="item" id={tab === 1 ? 'select' : ''}>洋装</button>
                <button  onClick={() => handleTabClick(2)} className="item" id={tab === 2 ? 'select' : ''}>和装</button>
                <button  onClick={() => handleTabClick(3)} className="item" id={tab === 3 ? 'select' : ''}>メンズ</button>
                <button  onClick={() => handleTabClick(4)} className="item" id={tab === 4 ? 'select' : ''}>YUMI KATSURA</button>
        </div>
        <div className="content">
            <div className="title">
                <img src={bgtop} alt="" />
                <img src={textTab4} id={tab === 4 ? '' : 'hidden'} alt=""  />
                <div className='title-bg' id={tab === 4 ? 'title-tab-4' : ''}>{textPage}</div>
                <img src={bgbottom} alt="" />
                <div className="title-text">
                    画像タップで詳細を確認できます
                </div>
            </div>
            <div className="list">
                {listTab.map((item, index) => (
                    <div className="item" key={index}>
                    <img src={item} alt="" />
                    <button className='button'  id={tab === 2 || tab === 4 ? 'hidden' : ''}>L-1 / S</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  <BeforeFooter />
</>
  )}
