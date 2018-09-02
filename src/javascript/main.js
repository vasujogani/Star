// main.js
// A set of functions and variables that are used on multiple pages, but are not utilites. This includes displaying and formatting posts, and other similar processes.

// Define list of month names to be used in date formatting
const month_names = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December"
];

const post_created_formatted = function (post) {
      if (post.created) {
            var created = new Date(post.created);

            var hours = created.getHours();
            if (hours < 10) {
                  hours = "0" + hours;
            }

            var minutes = created.getMinutes();
            if (minutes < 10) {
                  minutes = "0" + minutes;
            }

            var date = month_names[created.getMonth()] + " " + created.getDate() + ", " + created.getFullYear();
            var time = hours + ":" + minutes;

            return date + " - " + time;
      }
      else {
            return "";
      }
}

const post_ratings_formatted = function (post) {
      if (post.num_ratings) {
            if (post.num_ratings == 1) {
                  return post.num_ratings + " vote";
            }
            else {
                  return post.num_ratings + " votes";
            }
      }
      else {
            return "";
      }
}

var colors = [
      {
            "red": 24,
            "green": 93,
            "blue": 204
      },
      {
            "red": 0,
            "green": 255,
            "blue": 0
      }
];

const generate_rating_buttons = function (post_id) {
      var buttons = document.createElement("div");

      for (var i = 0; i < 5; i ++) {
            button = document.createElement("button");
            var factor = i / 5;
            var color = "rgba("
                   + ((colors[1].red * factor) + (colors[0].red * (1 - factor))) + ", "
                   + ((colors[1].green * factor) + (colors[0].green * (1 - factor))) + ", "
                   + ((colors[1].blue * factor) + (colors[0].blue * (1 - factor))) + ", "
                  + "1)";
            button.style = "background-color: " + color + " !important; filter: brightness(1"
            button.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored post-rating-button";
            button.id = "button-" + (i * 25);
            // addEventListener cannot be used
            button.setAttribute("onclick", "rate_post('" + post_id + "', " + (i * 25) + ");");

            if (i == 0) {
                  button.innerHTML += "<i class='material-icons'>remove</i>";
            }
            else if (i == 4) {
                  button.innerHTML += "<i class='material-icons'>add</i>";
            }

            buttons.appendChild(button);
      };

      return buttons;
}