import '../../../assets/scss/individualsStep1Style.scss'
import Button from "../../../components/common/Button.jsx";
import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export default function IndividualsStep1(props) {
    return (
        <div className="individuals">
            <div className="title">CONTACT</div>
            <div className="description">入力内容をご確認ください。</div>
            <form>
                <div className="formInput">
                    <div className="item">
                        <div className="title-item">お名前 ※必須</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item">
                        <div className="title-item">フリガナ ※必須</div>
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
                        <div className="title-item">電話番号 ※必須</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item"></div>
                    <div className="item">
                        <div className="title-item">〒</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="item"></div>
                    <div className="item" id='address'>
                        <div className="title-item">住所</div>
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                        <input type="text" placeholder='Ajouter du texte' className="input-item"  />
                    </div>
                    <div className="form-checkbox">
                        <div className="title-checkbox">お問い合わせのきっかけ</div>
                        <div className="list-checkbox">
                            <FormGroup>
                                <FormControlLabel sx={{'color':'default'}}  control={<Checkbox />} label="SNS" />
                                <FormControlLabel  control={<Checkbox />} label="ネットサーフィン" />
                                <FormControlLabel  control={<Checkbox />} label="ご紹介" />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel  control={<Checkbox />} label="商品WEB検索" />
                                <FormControlLabel  control={<Checkbox />} label="既存お取引先" />
                                <FormControlLabel  control={<Checkbox />} label="業界誌" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="form-checkbox">
                        <div className="title-checkbox">ご興味のあるサービスにチェックを入れてください。（複数回答可）</div>
                        <div className="list-checkbox">
                            <FormGroup>
                                <FormControlLabel  control={<Checkbox />} label="スタジオ撮影" />
                                <FormControlLabel  control={<Checkbox />} label="hogehoge" />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel  control={<Checkbox />} label="ロケーション撮影" />
                                <FormControlLabel  control={<Checkbox />} label="hogehoge" />
                                <FormControlLabel  control={<Checkbox />} label="その他" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="item" id='inquiry'>
                        <div className="title-item">お問い合わせ内容</div>
                        <input type="text" placeholder='テキストを追加' className="input-item"  />
                    </div>
                </div>
                <Button text={'送信'} style={{'fontWeight': "bold",'margin': '50px auto', 'width': 'fit-content'}} />
            </form>
        </div>
    )
  }
