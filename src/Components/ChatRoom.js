import React, { useState, useRef } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'

export default function ChatRoom(props) {

	const dummy = useRef();
	const messagesRef = props.firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const [formValue, setFormValue] = useState('');


	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = props.auth.currentUser;

		await messagesRef.add({
			text: formValue,
			createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL
		})

		setFormValue('');
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (<>
		<main>

			{messages && messages.map(msg =>
				<ChatMessage
					key={msg.id}
					message={msg}
					auth={props.auth}			
				/>
			)}

			<span ref={dummy}></span>

		</main>

		<form onSubmit={sendMessage}>

			<input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

			<button className="btn" type="submit" disabled={!formValue}>🕊️</button>

		</form>
	</>)
}
