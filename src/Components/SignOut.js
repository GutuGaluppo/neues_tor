export default function SignOut(props) {
	return props.auth.currentUser && (
		<button
			className="btn sign-out"
			onClick={() => props.auth.signOut()}
		>
			Sign Out
		</button>
	)
}