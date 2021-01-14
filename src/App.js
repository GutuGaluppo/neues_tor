import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './Components/SignIn'
import SignOut from './Components/SignOut'
// import { app } from './base'
import Routes from './Routes'
import './App.css';
import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

require('dotenv').config()

firebase.initializeApp({
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUNDLE,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
})

const auth = firebase.auth();

function App() {

	const [user] = useAuthState(auth)

	var userObj = auth.currentUser;
	var userEmail, userName;

	if (userObj != null) {
		userName = userObj.displayName;
		userEmail = userObj.email;
		console.log(userEmail, userName)
	}

	return (
		<div className="App">
			<header>
				<img src="https://layout.verwaltungsportal.de/10226/img/logo.png" alt="Grundschule Neues Tor" />
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<p>{userName}</p>
					<SignOut auth={auth} />
				</div>
			</header>
			<section>
				{user ?

					<Routes user={user} />
					:
					<SignIn
						firebase={firebase}
						auth={auth}
					/>}
			</section>
		</div>
	);
}

export default App;
