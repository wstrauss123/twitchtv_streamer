$(document).ready(function() {
    $(function() {
      var arr = ["OgamingSC2", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "freecodecamp", "brunofin", "comster404"];
      for (var i = 0; i < arr.length; i++) {

        $.ajax({
          async: false,
          cache: false,
          dataType: 'json',
          url: 'https://api.twitch.tv/kraken/channels/' + arr[i],
          success: function(data) {
            var Status = data.partner;

            if (Status === true) {
              Status = data.game;
            } else if (Status == false) {
              Status = 'offline';
            }

            if (data.logo === null) {
              $("#box").append("<div id='box' class='text-center middle box_format'>" + '<img class="image_adjust" src="./question.jpeg">' + '<p class="name_adjust">' + '<a href="' + data.url + '" target="_blank">' + data.display_name + '</a>' + '</p>' + '<p>' + Status + '</p>' + '</div>');
            } else {
              $("#box").append("<div id='box' class='text-center middle box_format'>" + '<img class="image_adjust" src="'+ data.logo +'">' + '<p class="name_adjust">' + '<a href="' + data.url + '" target="_blank">' + data.display_name + '</a>' + '</p>' + '<p>' + Status + '</p>' + '</div>');
            }
          },
          error: function(data) {
            $("#box").append("<div id='box' class='text-center middle box_format'>" + '<img class="image_adjust" src="./question.jpeg">' + '<p class="name_adjust">' + arr[i] + '</p>' + '<p>' + 'account closed' + '</p>' + '</div>');
          }
        });
      }
    });
});