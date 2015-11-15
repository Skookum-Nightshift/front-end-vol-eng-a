import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import SingleMatch from 'SingleMatch';
import QuizResultMatch from 'QuizResultMatch';
import Index from 'material-ui/lib/lists/index';
import ResultsStore from '../../stores/ResultsStore';
import GreenButton from 'GreenButton';
import { Router, Route, Link } from 'react-router';


class QuizResults extends React.Component {

  constructor(){
    super();

    this.state = {
      results: ResultsStore.getState().results
    };
  }

  componentDidMount() {
    ResultsStore.listen((state) => this.setState({ results: state.results }));
  }

  render(): ?ReactElement {

    var results = [];
    if(this.state.results && this.state.results !== 'undefined'){
      results = this.state.results.map(result => <SingleMatch data={result} />);
    }

    return (
      <div className="QuizResults">
        <HandlerHeader title="Your Results" />
        <QuizResultMatch results={results} />
        <GreenButton 
          linkButton={true}
          containerElement={ <Link to="/quiz" /> }
          href="/quiz"
          label="Take the Quiz Again" />
      </div>
    );
  }
}

QuizResults.propTypes = {
};

QuizResults.displayName = 'QuizResults';

export default QuizResults;
