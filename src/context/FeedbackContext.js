import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'A sample feedback!',
			rating: 10,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

	// add feedback
	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// delete feedback
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	// set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id, updateItem) => {
		setFeedback(feedback.map(item => (item.id === id ? { ...item, ...updateItem } : item)));
		setFeedbackEdit({ item: {}, edit: false });
	};

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
