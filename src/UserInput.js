import React from "react";
import "./UserInput.css";

import { Button } from "@material-ui/core";

function UserInput() {
	var getFile = (oEvent) => {
		const input = oEvent.target;
		if ("files" in input && input.files.length) {
			placeFileContent(input.files[0]);
		}
	};

	var placeFileContent = (file) => {
		readFileContent(file)
			.then((content) => {
				const oTargetImage = document.querySelector("#App-Result-Image");
				oTargetImage.setAttribute("src", content);
			})
			.catch((error) => console.log(error));
	};

	var readFileContent = (file) => {
		const oFileReader = new FileReader();
		return new Promise((resolve, reject) => {
			oFileReader.onload = (oEvent) => resolve(oEvent.target.result);
			oFileReader.onerror = (error) => reject(error);
			oFileReader.readAsDataURL(file);
		});
	};

	return (
		<div className="UserInput">
			<input
				accept="image/png, image/jpeg"
				className="userInput-input"
				id="contained-button-file"
				type="file"
				name="imageInput"
				onInput={getFile}
			/>
			<label htmlFor="contained-button-file">
				<Button variant="contained" color="primary" component="span">
					Upload
				</Button>
			</label>
		</div>
	);
}

export default UserInput;
