var locations = []; // this array will hold your objects
function State (state, revenue, locationCount) {
  this.state = state;
  this.revenue = function (averageRevenue){

  };
  this.locationCount = locationCount;
}
// object constructor

// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
