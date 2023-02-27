import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOption = ({ options, LeaveFeedback }) => {
  // console.log(Button);
  return (
    <ButtonList>
      {options.map(option => (
        <li>
          <Button
            key={option}
            bgcolor={option}
            type="button"
            onClick={() => {
              LeaveFeedback(option);
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
  LeaveFeedback: PropTypes.func,
};

export default FeedbackOption;
