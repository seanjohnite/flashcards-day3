app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
  FlashCardsFactory.getFlashCards()
  .then(function (flashCardsArray) {
    $scope.flashCards = flashCardsArray;
  });

  $scope.currentCategory = 'All';
  $scope.cheatMode = false;
  $scope.cheatText = 'Enable';

  $scope.getCategoryCards = function (category) {
    $scope.currentCategory = category;
    FlashCardsFactory.getFlashCards(category)
    .then(function (flashCardsArray) {
      $scope.flashCards = flashCardsArray;
    });
  }

  $scope.toggleCheat = function() {
    $scope.cheatMode = $scope.cheatMode ? false : true;
    $scope.cheatText = $scope.cheatMode ? 'Disable' : 'Enable';
  }

  $scope.categories = [
      'MongoDB',
      'Express',
      'Angular',
      'Node',
      'All'
  ];

  $scope.answerQuestion = function (answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      flashCard.answeredCorrectly = answer.correct;
      flashCard.answeredCorrectly ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
    }
  }

});

app.filter('cheat', function() {
  return function(answers) {
    return answers.filter(function (answer) {
      return answer.correct;
    })
  }
})