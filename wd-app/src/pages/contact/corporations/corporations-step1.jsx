import '../../../assets/scss/corporationsStyle.scss'
import Button from "../../../components/common/Button.jsx";
export default function CorporationsStep1(props) {
    return (
        <div className="corporations">
            <div className="title">CONTACT</div>
            <div className="description">明来エンタープライズへの総合的なお問い合わせはこちらからご送信ください。</div>
            <form>
                <div className="formInput">
                    <div className="item">
                        <div className="title-item">企業様名 ※必須</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">企業様名（フリガナ）※必須</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">ご担当者様名 ※必須</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">ご担当者様名（フリガナ ※必須</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">E-mall ※必須</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">E-mall（確認様） ※必須</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">TEL ※必須</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">FAX</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">〒</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                    <div className="item" id='address'>
                        <div className="title-item">住所</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                    <div className="item" id='inquiry'>
                        <div className="title-item">お問い合わせ内容</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                </div>
                <Button text={'確認画面'} style={{'fontWeight': "bold",'margin': '50px auto', 'width': 'fit-content'}} />
            </form>
        </div>
    )
  }
