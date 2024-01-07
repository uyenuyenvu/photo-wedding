import '../../assets/scss/buttonStyle.scss'

export default function Button(props) {
    return <div className={'buttonWrap'} style={props.style}>
      {props.text}
    </div>;
}
