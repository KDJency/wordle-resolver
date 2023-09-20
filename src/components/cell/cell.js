import classnames from 'classnames';
import Status from '../../constants/status';

import './cell.css';

export const Cell = ({ value, status }) => {
    const classes = classnames(
        'cell',
        {
            'absent': status === Status.absent,
            'correct': status === Status.correct,
            'present': status === Status.present,
        }
    )

    return (
        <div className={classes}>{value}</div>
    )
}