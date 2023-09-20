import { Cell } from '../cell/cell';

import './emptyRow.css';

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(5));

  return (
    <div className="empty-row">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}