import { PropTypes } from 'prop-types';
import { List, Item, Button } from './FeedbackSet.styled';


export function FeedbackSet({ options, onLeaveFeedBack }) {
    return (
        <List>
            {options.map((opt, index) => (
                <Item key={`opt-${index}`}>
                    <Button onClick={() => onLeaveFeedBack(opt)}>{opt}</Button>
                </Item>
            ))}
        </List>
    );
};

FeedbackSet.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
};