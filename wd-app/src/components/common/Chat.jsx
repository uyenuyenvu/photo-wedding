import '../../assets/scss/chatStyle.scss'

export default function Chat(props) {
    return <div className={'chatWrap'} style={props.style}>
        {props.text}
    </div>;
}
