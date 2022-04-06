import Card from './shared/card';
import ProtoTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card reverse={false}>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes />
			</button>
			<button onClick={() => editFeedback(item)} className="edit">
				<FaEdit />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.protoType = {
	item: ProtoTypes.object.isRequired,
};

export default FeedbackItem;
