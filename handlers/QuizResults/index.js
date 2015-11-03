import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import SingleMatch from 'SingleMatch';
import QuizResultMatch from 'QuizResultMatch';
import Index from 'material-ui/lib/lists/index';


class QuizResults extends React.Component {

  constructor(){
    super();

    this.state = {
         results: [
        {
          name: "A Child’s Place",
          logo: "/public/images/help-icon.svg",
          opportunityName: "Snack Packs",
          opportunityDescription: "Compile snack bags for children. Each snack pack will include 3 items: juice (prefer 100% juice boxes, but capri suns are also great), carb (crackers, granola, bars, breakfast bars, etc.), fruit (fruit cup, applesauce, fruit snacks). Bags should be lunch size brown bags."
        },
             {
          name: "Big Brothers/Big Sisters",
          logo: "/public/images/help-icon.svg",
          opportunityName: "Big Brother or Big Sister",
          opportunityDescription: "For a few hours, a couple times a month, you can give a Little the invaluable gift of your friendship. By simply changing their perspective of what the world can offer, you can literally start changing their lives. And sometimes it’s as simple as playing video games, going to a museum, or just hanging out together."
        },             
        {
          name: "The Relatives",
          logo: "/public/images/help-icon.svg",
          opportunityName: "Dinner with The Relatives",
          opportunityDescription: "Provide dinner for the youth and staff at the Crisis Center. There are 9 children and 2 staff. You can either drop off dinner, or stay and have dinner with the group."
        }
        ]
      };
    }
  render(): ?ReactElement {
        var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus et mauris efficitur feugiat aliquam in odio. Sed ut congue neque. Donec a erat mauris. Nulla pharetra lobortis mollis. Praesent eu semper tellus, vitae ullamcorper turpis. Proin ut justo lectus. Donec bibendum turpis lectus, non dictum erat laoreet a. Etiam eu lacinia elit. Ut dignissim urna metus, lobortis dignissim nibh bibendum non. Morbi vestibulum iaculis arcu eu rhoncus. Cras iaculis justo consequat, volutpat purus eget, tempus nisl. Proin eu nisi et leo cursus pellentesque."; 

if(this.state.results){
      var results = this.state.results.map(result =>
        <SingleMatch data={result} />
        );
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
  // promise: React.PropTypes.string.isRequired,
};

QuizResults.displayName = 'QuizResults';

export default Resolver.createContainer(QuizResults, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
