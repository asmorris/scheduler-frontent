import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
	let [name, setName] = useState(props.name || "");
	let [interviewer, setInterviewer] = useState(props.interviewer || null);

	const reset = () => {
		setName("");
		setInterviewer(null);
		props.onCancel();
	};

	const saveHandler = (name, interviewer) => {
		props.onSave(name, interviewer);
	};
	return (
		<main className="appointment__card appointment__card--create">
			<section className="appointment__card-left">
				<form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
					<input
						className="appointment__create-input text--semi-bold"
						name="name"
						type="text"
						placeholder="Enter Student Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</form>
				<InterviewerList
					interviewers={props.interviewers}
					interviewer={interviewer}
					onChange={setInterviewer}
				/>
			</section>
			<section className="appointment__card-right">
				<section className="appointment__actions">
					<Button danger onClick={reset}>
						Cancel
					</Button>
					<Button confirm onClick={() => saveHandler(name, interviewer)}>
						Save
					</Button>
				</section>
			</section>
		</main>
	);
}
