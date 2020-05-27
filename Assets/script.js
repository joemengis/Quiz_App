var timer = 10;

    setInterval(function() {
        timer -= 1;
        document.getElementById('timer').innerText = timer;
    // display time on screen
    // check if timer is 0
        if (timer === 0) {
    // stop the quiz
        location.href="./end.html"
        }
    }, 1000);

   