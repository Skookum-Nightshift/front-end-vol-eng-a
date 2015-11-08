var alt = require('../alt');

class ResultsActions {
  updateResults(results) {
    this.dispatch(results);
  }

  deleteResults() {
    this.dispatch();
  }
}

module.exports = alt.createActions(ResultsActions);
