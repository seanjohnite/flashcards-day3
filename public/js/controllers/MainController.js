app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
  // template definitions:
  $scope.stats = 'templates/stats.html';
  $scope.flashCard = 'templates/flashCard.html';
  $scope.loading = true;

  FlashCardsFactory.getFlashCards()
  .then(function (flashCardsArray) {
    $scope.loading = false;
    $scope.flashCards = flashCardsArray;
  });

  $scope.currentCard = 0;
  $scope.goToNext = function (answeredCorrectly) {
    if ($scope.currentCard === $scope.flashCards.length) {
      console.log('hi tehre');
      $scope.showScore = true;
    }
  };

  $scope.currentCategory = 'All';
  $scope.cheatMode = false;
  $scope.cheatText = 'Enable';

  $scope.getCategoryCards = function (category) {
    $scope.loading = true;
    $scope.currentCategory = category;
    FlashCardsFactory.getFlashCards(category)
    .then(function (flashCardsArray) {
      $scope.loading = false;
      $scope.flashCards = flashCardsArray;
    });
  };

  $scope.toggleCheat = function() {
    $scope.cheatMode = $scope.cheatMode ? false : true;
    $scope.cheatText = $scope.cheatMode ? 'Disable' : 'Enable';
  };

  $scope.categories = [
      'MongoDB',
      'Express',
      'Angular',
      'Node',
      'All'
  ];

});

app.filter('cheat', function() {
  return function(answers) {
    return answers.filter(function (answer) {
      return answer.correct;
    });
  };
});
