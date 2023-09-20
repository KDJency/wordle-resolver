import { CompletedRow } from '../completedRow/completedRow';
import { CurrentRow } from '../currentRow/currentRow';
import { EmptyRow } from '../emptyRow/emptyRow';

import './grid.css';

export const Grid = ({ currentGuess, guesses, solution }) => {
    const empties = guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];
    const completedRows = guesses.map((guess, i) => <CompletedRow key={i} guess={guess} solution={solution} />);
    const currentRow = guesses.length < 6 && <CurrentRow guess={currentGuess} solution={solution} />;
    const emptyRows = empties.map((_, i) => <EmptyRow key={i} />);

    return (
        <div className="grid-container">
            {completedRows}
            {currentRow}
            {emptyRows}
        </div>
    )
}