// YOU DO NOT NEED TO EDIT this code. But do take the time to understand what it's doing.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;
}

// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader("");
//   jqXHR.setRequestHeader("");
// });