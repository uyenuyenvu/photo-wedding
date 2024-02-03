import '../../assets/scss/articleStyle.scss'
import img4 from '../../assets/images/img4.jpg'
import top from '../../assets/images/top-bg.svg'
import bottom from '../../assets/images/bottom-bg.svg'
import img1 from '../../assets/images/img1.jpg'
import img3 from '../../assets/images/img3.jpg'
export default function CustomerReport() {
  return (
    <div className={'article'}>
        <img src={img4} className='banner' alt="" />
        <div className="map">
            {`TOP > CUSTOMER REPORT > ARTICLE`}
        </div>
        <div className='title'>
            <img src={top} alt="" />
            <div className='text-title'>オープニングキャンペーン　特賞のお客様</div>
            <img src={bottom} alt="" />
        </div>
        <div className="bg-campaign">
        【 ＢＬＡＮＺオープニングキャンペーン 】
        </div>
        <div className="content">
            <div className="text-content">
            【 ＢＬＡＮＺオープニングキャンペーン 】<br />
            <div><br /></div>
            350組近いカップルの中から<br />
            特賞に選ばれたおふたりの撮影を<br />
            ご紹介します<br />
            撮影日：2020年12月20日<br />
            </div>
            <div className="item">
                <img src={img1} alt="" />
                <div className="text-item">
                新型コロナウイルスの影響で、結婚式の延期・中止を余儀なくされているカップルの「結婚をかたちに残したい」という想いにお応えするため、オープニングキャンペーンを行いました。<br />
                本日は、特賞に選ばれたおふたりのウェディングフォトをご紹介します。<br />
                <div><br /></div>
                シックで大人っぽい雰囲気がお好みのおふたりは、三連窓シーンの斜めアングルからのお写真を気に入られました。<br />
                </div>
            </div>
            <div className="item">
                <img src={img3} alt="" />
                <div className="text-item">
                また、華やかなフラワーウォールのシーンもいい ！ と、こちらのシーンもお選びいただきました。<br />
色とりどりのお花と微笑み合うおふたりが印象的なとても素敵なお写真です。<br />
おふたりが自然と笑顔になれる瞬間にスタッフも笑顔になりました♪<br />
                </div>
            </div>
        </div>
    </div>
  );
}