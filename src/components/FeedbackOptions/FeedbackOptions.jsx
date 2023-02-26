import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li>
          <Button
            key={option}
            bgcolor={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
