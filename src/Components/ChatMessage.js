import './App.css';

export default function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';

	// Generates random user picture
	const pic = 'https://randomuser.me/api/portraits/women/28.jpg'

	return (<>
		<div className={`message ${messageClass}`}>
			<img src={photoURL || pic} alt="user"/>
			<p>{text}</p>
		</div>
	</>)
}