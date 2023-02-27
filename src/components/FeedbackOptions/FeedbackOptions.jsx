import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOption = ({ options, LeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(name => (
        <li>
          <Button
            key={name}
            bgcolor={name}
            onClick={() => {
              LeaveFeedback(name);
            }}
          >
            {name}
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
