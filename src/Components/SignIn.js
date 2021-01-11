export default function SignIn(props) {

	const { auth, firebase } = props

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider)
	}

	// const signInWithEmail = () => {
	// 	const provider = new firebase.auth.EmailAuthProvider()
	// 	auth.signInWithPopup(provider)
	// }

	return (
		<>
			<button
				className="btn sign-in"
				onClick={signInWithGoogle}
			>
				Sign in with Google
			</button>
			{/* <button
				className="btn sign-in"
				onClick={signInWithEmail}
			>
				Sign in with E-mail
			</button> */}
		</>
	)
}
