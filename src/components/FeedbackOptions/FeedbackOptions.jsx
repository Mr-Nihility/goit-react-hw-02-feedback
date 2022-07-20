import { PropTypes } from 'prop-types';
//----------------------------------------------------------//
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="feed-list">
      {options.map(el => {
        return (
          <li key={el}>
            <button
              type="button"
              name={el}
              onClick={onLeaveFeedback}
              className="btn"
            >
              {el.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
