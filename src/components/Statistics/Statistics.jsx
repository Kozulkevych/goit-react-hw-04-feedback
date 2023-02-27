import PropTypes from 'prop-types';
import {
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from 'react-icons/bs';
import {
  StatList,
  StatItem,
  Value,
  StatItemFeedback,
  StatText,
  ValueFedback
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatList>
    <StatItem>
       <BsEmojiHeartEyesFill fill="rgba(0, 128, 75, 0.7)" />
      <StatText>
        Good: <Value> {good}</Value>
      </StatText>
    </StatItem>
    <StatItem>
        <BsEmojiNeutralFill fill="rgba(224, 201, 50, 0.6)" />
      <StatText>
        Neutral:<Value> {neutral}</Value>
      </StatText>
    </StatItem>
    <StatItem>
       <BsEmojiFrownFill fill="rgba(202, 30, 30, 0.6)" />
      <StatText>
        Bad:<Value> {bad}</Value>
      </StatText>
    </StatItem>
    <StatItem>
      <StatText>
        Total: <Value> {total}</Value>
      </StatText>
    </StatItem>
    <StatItemFeedback>
      <StatText>
        Positive feedback: <ValueFedback>{positivePercentage}%</ValueFedback>
      </StatText>
    </StatItemFeedback>
  </StatList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
