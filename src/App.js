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

console.log("APP ", auth)

function App() {

	const [user] = useAuthState(auth)

	return (
		<div className="App">
			<header>
				<h1>Grunschule Neues Tor - Homeschooling</h1>
				<SignOut auth={auth} />
			</header>
			<section>
				{user ?

					<Routes user={user} />
					// <ClassesRoom
					// 	app={app}
					// 	firestore={firestore}
					// 	auth={auth}
					// />
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
