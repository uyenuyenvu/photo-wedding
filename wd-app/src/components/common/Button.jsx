import '../../assets/scss/buttonStyle.scss'

export default function Button(props) {
    return <div className={`buttonWrap ${props.type ? 'type1' : ''}`} style={props.style}>
      {props.text}
    </div>;
}
