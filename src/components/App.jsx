import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container, TitleH1, Span, TitleH2 } from './App.styled';

export default function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const LeaveFeedback = name => {
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;
  // console.log(options);
  return (
    <Container>
      <Section>
        <TitleH1>
          <Span>PLEASE LEAVE FEEDBACK </Span>
        </TitleH1>
        <FeedbackOptions options={options} LeaveFeedback={LeaveFeedback} />
      </Section>

      <Section>
        <TitleH2>Statistics</TitleH2>
        {!total ? (
          <Notification message="There is no feedback..." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Container>
  );
}
