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
       <BsEmojiHeartEyesFill/>
      <StatText>
        Good: <Value> {good}</Value>
      </StatText>
    </StatItem>
    <StatItem>
        <BsEmojiNeutralFill/>
      <StatText>
        Neutral:<Value> {neutral}</Value>
      </StatText>
    </StatItem>
    <StatItem>
       <BsEmojiFrownFill/>
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
