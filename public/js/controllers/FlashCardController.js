app.controller('FlashCardController', function ($scope, ScoreFactory) {
  
  $scope.answerQuestion = function (answer) {
    if (!$scope.answered) {
      $scope.answered = true;
      $scope.answeredCorrectly = answer.correct;
      answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
    }
  };
  
});