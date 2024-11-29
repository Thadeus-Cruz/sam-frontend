import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../Assets/Styles/User/community.css';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';

const Community = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: 'User1',
      text: 'How to change the oil in a car?',
      answers: [
        { id: 1, user: 'User2', text: 'You need to drain the old oil, replace the oil filter, and then add new oil.' },
        { id: 2, user: 'User3', text: 'Make sure to use the correct type of oil for your car model.' }
      ]
    },
    {
      id: 2,
      user: 'User4',
      text: 'What does it mean if my car’s check engine light is on?',
      answers: [
        { id: 1, user: 'User5', text: 'It could mean a variety of issues. It’s best to take your car to a mechanic to get it checked.' }
      ]
    }
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const checkAuthToken = () => {
    const token = sessionStorage.getItem('authToken') || localStorage.getItem('authToken');
    if (!token) {
      alert('You are not logged in. Redirecting to login page...');
      navigate('/login');
      return false;
    }
    return true;
  };

  const handleAddQuestion = () => {
    if (!checkAuthToken()) return;

    const newQuestionObj = {
      id: questions.length + 1,
      user: 'CurrentUser',
      text: newQuestion,
      answers: []
    };
    setQuestions([...questions, newQuestionObj]);
    setNewQuestion('');
  };

  const handleAddAnswer = () => {
    if (!checkAuthToken()) return;

    const updatedQuestions = questions.map((question) => {
      if (question.id === selectedQuestionId) {
        return {
          ...question,
          answers: [
            ...question.answers,
            { id: question.answers.length + 1, user: 'CurrentUser', text: newAnswer }
          ]
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    setNewAnswer('');
  };

  // Use useEffect to check for authToken after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      checkAuthToken();
    }, 15000); // 5-second delay before checking the token

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, [navigate]);

  return (
    <div>
      <div className='community-outer-image'></div>
      <div className="community-outer-color"></div>
      <NavBar style={{ backgroundColor: '#222222' }}/>
      <div className="community-page">
        <h1 className='community-h1'>Community Questions and Answers</h1>
        <div className="new-question">
          <h2>Ask a new question</h2>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here"
          />
          <button onClick={handleAddQuestion}>Submit</button>
        </div>
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question">
              <h3>{question.user}: {question.text}</h3>
              <div className="answers">
                {question.answers.map((answer) => (
                  <div key={answer.id} className="answer">
                    <p>{answer.user}: {answer.text}</p>
                  </div>
                ))}
                <div className="new-answer">
                  <input
                    type="text"
                    value={selectedQuestionId === question.id ? newAnswer : ''}
                    onChange={(e) => {
                      setSelectedQuestionId(question.id);
                      setNewAnswer(e.target.value);
                    }}
                    placeholder="Type your answer here"
                  />
                  <button onClick={handleAddAnswer}>Submit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
