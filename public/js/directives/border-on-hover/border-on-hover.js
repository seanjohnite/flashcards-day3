app.directive('borderOnHover', function () {
  
  function link(scope, element, attribute) {
    var border;
    element.on('mouseenter', function () {
      border = element.css('border');
      element.css('border', '2px solid black');
    });
    element.on('mouseleave', function () {
      element.css('border', border);
    });
  }

  return {
    restrict: 'A',
    link: link
  };
})