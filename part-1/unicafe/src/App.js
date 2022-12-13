import "./App.css";
import React, { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, allClicks] = useState(0);
	const [positive, setPositive] = useState([]);

	const increaseGood = () => {
		allClicks(all + 1);
		setGood(good + 1);
	};
	const increaseNeutral = () => {
		allClicks(all + 1);
		setNeutral(neutral + 1);
	};
	const increaseBad = () => {
		allClicks(all + 1);
		setBad(bad + 1);
	};

	return (
		<>
			<h1>Give Feedback</h1>
			<button onClick={increaseGood}>Good</button>
			<button onClick={increaseNeutral}>Neutral</button>
			<button onClick={increaseBad}>Bad</button>

			<h2>Statistics</h2>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			<p>All Submissions: {all}</p>
			<p>Average: {all / 3}</p>
			<p>Positive: {(good + neutral) / 3}</p>
		</>
	);
};

export default App;
