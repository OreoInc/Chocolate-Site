SC.initialize({
  client_id: '269d0e02bb892a4217d31ed7e923954c'
});

$(document).ready(function() {
SC.stream('/tracks/293', function(sound){
$('#start').click(function(e){
    e.preventDefault();
    sound.start();
});
$('#stop').click(function(e){
e.preventDefault();
sound.stop();
});
});
});