$(".start").on("click", function () {

    var pattern = [];
    $("p").text("");
    $(".level").text("Level : 0");

    var j = 0;

    function generate_pattern() {

        var randomNum = Math.floor(Math.random() * 4);

        var randomColor;
        switch (randomNum) {
            case 0:
                randomColor = "red";
                break;
            case 1:
                randomColor = "blue";
                break;
            case 2:
                randomColor = "green";
                break;
            default:
                randomColor = "yellow";
                break;
        }
        pattern.push(randomColor);
        $(".level").text("Level : " + pattern.length);

        let i=0;
        const Interval=setInterval(() => {
            var a = new Audio( pattern[i] + ".mp3");
                a.play();

                $("." + pattern[i]).addClass("pressed");

                setTimeout(function () {
                    $("." + pattern[i]).removeClass("pressed");
                    i++;
                }, 400);

                
                if(i>=pattern.length){
                    clearInterval(Interval);
                }
        }, 600);

    }


    $(".btn").on("click", function (clicked_color) {
        var clicked_color = this.id;

        $("#" + clicked_color).addClass("pressed");

        var a = new Audio(clicked_color + ".mp3");
        a.play();

        setTimeout(function () {
            $("#" + clicked_color).removeClass("pressed");
        }, 400);

        if (clicked_color === pattern[j]) {
            j++;

            if (j === pattern.length) {

                setTimeout(function () {
                    generate_pattern();
                    j = 0;
                }, 1000);

            }
        }
        else {
            $(".p1").text("Game-over");
            $(".p2").text("press Start to Play again");
            
            var a = new Audio("wrong.mp3");
            a.play();
            pattern = [];
            j = 0;
            $(".level").text("Level : " + pattern.length);
        }
    });
    generate_pattern();

});


$(".info").on("click",function(){

    var flag = document.getElementsByClassName("hidden");
    
    if(flag.length==0){
        $(".info").addClass("hidden");
        $(".rules").fadeIn();
    }
    else{
        $(".info").removeClass("hidden");
        $(".rules").fadeOut();
    }
    
});



