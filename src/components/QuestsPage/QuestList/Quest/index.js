import React from 'react';

const Quest = ({ name, status, reqsMet }) => {

    let className = 'quest-not-started';
    if (status === "In Progress") {
        className = 'quest-in-progress';
    } else if (status === "Done") {
        className = 'quest-done';
    }

    return (
        <div className={`quest ${className}`}>
            {`${name}: ${status}. Requirements Met: ${reqsMet}`}
        </div>
    )
};

export default Quest;