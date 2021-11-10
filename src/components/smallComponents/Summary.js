import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "../../reducers/quiz";

export const Summary = () => {
	const questions = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

	const answers = useSelector((state) => state.quiz.answers);

	const dispatch = useDispatch();

	const anotherTry = () => {
		dispatch(quiz.actions.restart());
	};
	console.log("this is answer", answers);

	return (
		<div>
			<p>Thats the draft of summary page</p>
			<button className="submit-button" type="submit" onClick={anotherTry}>
				Try Again
			</button>
			{answers.map((answer) => (
				<div key={answer.questionId}>
					<h2>
						Question {answer.questionId} is {String(answer.isCorrect)}
					</h2>
				</div>
			))}
		</div>
	);
};

//<h2>{answer.isCorrect.filter(true).length}/5 correct answers</h2>
