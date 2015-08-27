app.directive('borderOnHover', function () {
  
  function link(scope, element, attribute) {
    element.on('mouseenter', function () {
      console.log('entered');
      element.css('border', '2px solid black');
    });
    element.on('mouseleave', function () {
      console.log('left');
      element.css('border', '');
    });
  }

  return {
    restrict: 'A',
    link: link
  };
})