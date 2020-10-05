import React from 'react';
function Control() {
    return (
        <div className="info_task">
            <div className="total_quantity_task">
                <p>3 items left</p>
            </div>
            <div className="toggle_filter_task">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div className="action_clear">
                <button>Clear Completed</button>
            </div>
        </div>
    );
}

export default Control;

