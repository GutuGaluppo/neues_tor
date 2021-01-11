import React from 'react'
import BlueFolder from '../img/blue_folder.png'
// import YellowFolder from '../img/yellow_folder.png'

export default function ClassesRoom(props) {

	const hiddenFileInput = React.useRef(null);

	const handleClick = event => {
		hiddenFileInput.current.click();
	}

	const handleChange = event => {

		const file = event.target.files[0];
		const storageRef = props.app.storage().ref();
		const fileRef = storageRef.child(file.name);
		fileRef.put(file).then(() => {
			console.log("Uploaded file ", file.name)
		})
	};

	const onSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div>
			<h1>Class Room</h1>
			<form onSubmit={onSubmit}>
				<input
					type="file"
					style={{ display: 'none' }}
					ref={hiddenFileInput}
					onChange={handleChange}

				/>

				<img src={BlueFolder} alt="folder icon" onClick={handleClick} />
				<input type="text" name="username" placeholder="user" />
				<button className="btn">Submit</button>

				{/* <img src={YellowFolder} alt="folder icon" onClick={handleClick} /> */}



			</form>
			<ul>
				<li></li>
			</ul>
		</div>
	)
}
