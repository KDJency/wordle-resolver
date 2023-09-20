import { Cell } from '../cell/cell';
import { getStatuses } from '../../helpers/statusHelper';

import './currentRow.css';

export const CurrentRow = ({ guess, solution }) => {
  const splitGuess = guess.split('');
  const statuses = getStatuses(guess, solution);

  return (
    <div className="current-row">
      {splitGuess.map((letter, i) => {
        return (
          <Cell key={i} value={letter} status={statuses[i]}/>
        )
      })}
    </div>
  )
}