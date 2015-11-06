import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import SingleMatch from 'SingleMatch';
import QuizResultMatch from 'QuizResultMatch';
import Index from 'material-ui/lib/lists/index';
import ResultsStore from '../../stores/ResultsStore';


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
    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus et mauris efficitur feugiat aliquam in odio. Sed ut congue neque. Donec a erat mauris. Nulla pharetra lobortis mollis. Praesent eu semper tellus, vitae ullamcorper turpis. Proin ut justo lectus. Donec bibendum turpis lectus, non dictum erat laoreet a. Etiam eu lacinia elit. Ut dignissim urna metus, lobortis dignissim nibh bibendum non. Morbi vestibulum iaculis arcu eu rhoncus. Cras iaculis justo consequat, volutpat purus eget, tempus nisl. Proin eu nisi et leo cursus pellentesque."; 

    var results = [];
    if(this.state.results && this.state.results !== 'undefined'){
      results = this.state.results.map(result => <SingleMatch data={result} />);
    }

    return (
      <div className="QuizResults">
        <HandlerHeader title="Your Results" introParagraph={paragraph}/>
        <h4>Top 3 Matches</h4>
        <QuizResultMatch results={results} />
      </div>
    );
  }
}

QuizResults.propTypes = {
};

QuizResults.displayName = 'QuizResults';

export default QuizResults;
