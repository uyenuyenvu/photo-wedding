import '../../assets/scss/planList.scss'
import Button from "../../components/common/Button.jsx";
import imgDefault from '../../assets/images/imageDefault.png'
import imgDownArrow from '../../assets/images/down-arrow.png'
export default function PlanList() {
    return (
        <div className={'plan-list'}>
            <div className="title">プラン一覧</div>
            <div className='content'>
                <div className="item-content">
                    <div className="img-content">
                        <img src={imgDefault} alt="" className='imageBg'/>
                    </div>
                    <div className="text-content">
                        <div className="title-text">スタジオ撮影</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <Button text={'プランを確認'} style={{'fontWeight': "bold",'margin-top': '18px', 'width': 'fit-content'}} />
                    </div>
                </div>
                <div className="item-content">
                    <div className="img-content">
                        <img src={imgDefault} alt="" className='imageBg'/>
                    </div>
                    <div className="text-content">
                        <div className="title-text">ロケーション撮影 (日本の風景)</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <Button text={'プランを確認'} style={{'fontWeight': "bold",'margin-top': '18px', 'width': 'fit-content'}} />
                    </div>
                </div>
                <div className="item-content">
                    <div className="img-content">
                        <img src={imgDefault} alt="" className='imageBg'/>
                    </div>
                    <div className="text-content">
                        <div className="title-text">ロケーション撮影 (アニメ)</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <Button text={'プランを確認'} style={{'fontWeight': "bold",'margin-top': '18px', 'width': 'fit-content'}} />
                    </div>
                </div>
                <div className="item-content">
                    <div className="img-content">
                        <img src={imgDefault} alt="" className='imageBg'/>
                    </div>
                    <div className="text-content">
                        <div className="title-text">日本旅行 セットプラン</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <div className="content-text">hogehoge hogehoge：00000元</div>
                        <Button text={'プランを確認'} style={{'fontWeight': "bold",'margin-top': '18px', 'width': 'fit-content'}} />
                    </div>
                </div>
                
            </div>
            <div className="border">
            </div>
            <div className="instruct">
                <div className="instruct-title">ご利用の流れ</div>
                <div className="instruct-content">
                    <div className="instruct-item">
                        <div className="chart">お問い合わせ 
                            <div className="arrow">
                             <img src={imgDownArrow} alt="" />
                            </div>
                        </div>
                        <div className="note">WeChatからお問い合わせ</div>
                    </div>
                    <div className="instruct-item">
                        <div className="chart">Web Meeting 
                            <div className="arrow">
                             <img src={imgDownArrow} alt="" />
                            </div>
                        </div>
                        <div className="note">フォトプランナーと面談を実施し、疑問点を解消。</div>
                    </div>
                    <div className="instruct-item">
                        <div className="chart">プラン & 来日日程を決める 
                            <div className="arrow">
                             <img src={imgDownArrow} alt="" />
                            </div>
                        </div>
                        <div className="note">面談の情報等を元に プラン(衣装含め?)と 来日日程を決定。</div>
                    </div>
                    <div className="instruct-item">
                        <div className="chart">来日し 撮影場所にご来店 
                            <div className="arrow">
                             <img src={imgDownArrow} alt="" />
                            </div>
                        </div>
                        <div className="note">来日し撮影場所にご来店いただく。
                        <p>※来日の際のご不明点はWeChatよりお気軽にお問い合わせください。</p>
                        </div>
                    </div>
                    <div className="instruct-item">
                        <div className="chart">撮影 
                            <div className="arrow">
                             <img src={imgDownArrow} alt="" />
                            </div>
                        </div>
                        <div className="note">現地にて撮影📸</div>
                    </div>
                    <div className="instruct-item">
                        <div className="chart">納品 
                        </div>
                        <div className="note">X日後に画像データをお渡し。</div>
                    </div>
                </div>
                <Button text={'お問い合わせはこちら'} style={{'fontWeight': "bold",'margin': '0 auto 95px', 'width': 'fit-content'}} />
            </div>
        </div>
    )
}