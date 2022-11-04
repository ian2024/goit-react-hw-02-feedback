import { List, Field } from './Statistic.styled';
import { PropTypes } from 'prop-types';

export function Statistic({ good, neutral, bad, total, positivePercentage }) {
    return (
        <List>
            <Field key="stat-good">Good: {good}</Field>
            <Field key="stat-neut">Neutral: {neutral}</Field>
            <Field key="stat-bad">Bad: {bad}</Field>
            <Field key="stat-total">Total: {total}</Field>
            <Field key="stat-posit">Positive Feedback: {positivePercentage}%</Field>
        </List>
    )
};

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};