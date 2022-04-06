import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/headerComponent';
import FeedbackList from './components/FeedbackListComponent';
import FeedbackData from './data/feedbackData';
import FeedbackStats from './components/feedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';

console.log(`Welcome to my simple Feedback ui! This was built with React`);
console.log(`Built as part of learning with the 'React Front To Back 2022'`);

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<FeedbackProvider>
			<Router>
				<HeaderComponent />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route exact path="/about" element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
