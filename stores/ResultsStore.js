var alt = require('../alt');
var ResultsActions = require('../actions/ResultsActions');

import cookie from 'react-cookie';

class ResultsStore {
  constructor() {
    this.results = cookie.load('results');

    this.bindListeners({
      handleUpdateResults: ResultsActions.UPDATE_RESULTS,
      handleDeleteResults: ResultsActions.DELETE_RESULTS,
    });
  }

  handleUpdateResults(results) {
    this.results = results;
    var expires = new Date();
    expires.setDate(expires.getDate() + 2); // 2 days from now
    cookie.save('results', JSON.stringify(results), { expires });
  }

  handleDeleteResults() {
    this.results = null;
    cookie.remove('results');
  }
}

module.exports = alt.createStore(ResultsStore, 'ResultsStore');
