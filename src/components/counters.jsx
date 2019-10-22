import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrease,
      onDeleteAll
    } = this.props;
    return (
      <div>
        <button onClick={onDeleteAll} className="btn btn-danger btn-sm m-2">
          DeleteAll
        </button>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
