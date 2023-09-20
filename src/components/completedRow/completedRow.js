import { Cell } from '../cell/cell';
import { getStatuses } from '../../helpers/statusHelper';

import './completedRow.css';

export const CompletedRow = ({ guess, solution }) => {
    const statuses = getStatuses(guess, solution);

    return (
        <div className="completed-row">
            {guess.split('').map((letter, i) => (
                <Cell key={i} value={letter} status={statuses[i]} />
            ))}
        </div>
    )
}