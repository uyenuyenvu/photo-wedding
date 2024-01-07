import '../../../assets/scss/corporationsStyle.scss'
import Button from "../../../components/common/Button.jsx";
export default function CorporationsStep2(props) {
    return (
        <div className="corporations">
            <div className="title">CONTACT</div>
            <div className="description">入力内容をご確認ください。</div>
            <form>
                <div className="formInput">
                    <div className="item">
                        <div className="title-item">企業様名</div>
                        <input type="text" placeholder='Remain in株式会社' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">企業様名（フリガナ）</div>
                        <input type="text" placeholder='リメインインカブシキガイシャ' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">ご担当者様名 ※必須</div>
                        <input type="text" placeholder='千原 涼雅' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">ご担当者様名（フリガナ ※必須</div>
                        <input type="text" placeholder='チハラ リョウガ' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">E-mall ※必須</div>
                        <input type="text" placeholder='chihara.r@remain-in.com' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">E-mall（確認様） ※必須</div>
                        <input type="text" placeholder='chihara.r@remain-in.com' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">TEL ※必須</div>
                        <input type="text" placeholder='03-6822-6906' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">FAX</div>
                        <input type="text" placeholder='03-0000-0000' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">〒</div>
                        <input type="text" placeholder='107-0062' className="input-item"  />
                    </div>
                    <div className="item" id='address'>
                        <div className="title-item">住所</div>
                        <input type="text" placeholder='東京都港区南青山 3-3-3' className="input-item"  />
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item" id='inquiry'>
                        <div className="title-item">お問い合わせ内容</div>
                        <input type="text" placeholder='hogehoge' className="input-item"  />
                    </div>
                </div>
                <Button text={'送信'} className='btn' style={{'fontWeight': "bold",'margin': '50px auto', 'width': '105px', 'padding': '10px auto'}} />
            </form>
        </div>
    )
  }
