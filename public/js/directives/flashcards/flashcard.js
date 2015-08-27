app.directive('flashCard', function(ScoreFactory){
    function link (scope, element, attribute){
      scope.answerQuestion = function (answer) {
        if (!scope.answered) {
          scope.answered = true;
          scope.answeredCorrectly = answer.correct;
          answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
        };
      };
    };
    return {
      restrict: 'E',
      templateUrl: 'js/directives/flashcards/flashcard.html',
      link: link,
      scope: {
        flashCard: "="
      }
    }
})
