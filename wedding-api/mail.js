const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env' });
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/send-email', async (req, res) => {
    const formData = req.body;

    try {
        await sendEmail(formData);
        res.status(200).send('success');
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    }
});

async function sendEmail(formData) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.Gmailuser,// 送信元のGmailアカウント
            pass: process.env.Gmailpass // 送信元のGmailアカウントのパスワード
        }
    });
    const mail10ptions = {
        from: process.env.Gmailuser, // SMTPに認証するためのメアド
        to: process.env.Gmailuser, // 送信先のメールアドレス
        subject: 'お問い合わせがありました',
        text: generateEmailText(formData)
    };

    await transporter.sendMail(mail10ptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('email sent:'+info.response);
        }
    });
}
// ここでお問い合わせ内容をテキストに変換するロジックを追加
  // 例: return `お名前: ${formData.name}\nメール: ${formData.email}\n...`;
function generateEmailText(formData) {
    const {
        name,
        furigana,
        email,
        confirmEmail,
        phone,
        postalCode,
        address,
        contactTrigger,
        interestedServices,
        inquiry
    } = formData;

    // contactTrigger= ["SNS", "ご紹介"]
    // ↓
    // お問い合わせのきっかけ: SNS, ご紹介
    const formattedText = `
  お名前: ${name} (${furigana})
  メールアドレス: ${email} (確認用: ${confirmEmail})
  電話番号: ${phone}
  〒: ${postalCode}
  住所: ${address}
  お問い合わせのきっかけ: ${contactTrigger ? contactTrigger.join(', ') : 'なし'} 
  ご興味のあるサービス: ${interestedServices ? interestedServices.join(', ') : 'なし'}
  お問い合わせの内容:
  ${inquiry}
`;
    return formattedText;
}



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});