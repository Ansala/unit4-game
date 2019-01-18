var Random_i;
var former = 0; 
var winCount = 0;
var loseCount = 0;


var CrystalGame = function() {

    $(".crystals").empty();

    var images = [
        'http://images.clipartpanda.com/crystal-clipart-image_crystal008.jpg',
        'https://vignette.wikia.nocookie.net/ideas/images/8/80/10408410-singe-yellow-crystal-diamond-close-up-isolated-on-white-background.jpg/revision/latest?cb=20120630223108',
        'https://cdn.shopify.com/s/files/1/1396/0785/products/swarovski-crystal-round-beads-5000-8-am-swarovski-8mm-round-amethyst-beads-package-of-12-beads-1_large.jpeg?v=1484026987',
        'http://www.photo-dictionary.com/photofiles/list/1337/1838emerald.jpg'
    ]


    for (var i=0; i<4; i++){

        var crystal_random = Math.floor(Math.random()*11) + 1;
        //console.log(crystal_random);
        var crystal = $("<div>");
        crystal.attr({
            "class":'crystal',
            "clickRandom": crystal_random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

        $(".crystals").append(crystal);

    }

    Random_i=Math.floor(Math.random()*102) + 18;
    //console.log(Random_i);

    $("#computer_random").html("Challenge: "+ Random_i);

    $("#prev").html("Total Score: " + former);
}


CrystalGame();


$(document).on('click', ".crystal", function(){

    var click = parseInt($(this).attr('clickRandom'));
    former += click;
    $("#prev").html("Total Score: " + former);

    console.log(former);

    if(former > Random_i ){
        loseCount++;
        $("#lose").html("You Lost: " + loseCount);
        former = 0;
       
        CrystalGame();
    }
    else if(former === Random_i){
        winCount++;
        $("#win").html("You Won: " + winCount);
        former = 0;
       
        CrystalGame();
    }

    //var result = click + 7;
    //console.log(click, '+', result);
});

//Pseudo code

//4 crystals
//    each crystal has a random number
//   each crystal random number range between 1 and 12
//    new crystal random number after we win or lose
//    each click on the crystals adds to the umber of previous click
//Computer generates a random number
//    range between 18 and 120
//    new computer random number after we win or lose
//If the total after clicks equal to the computer random, then we win 
//If the total count not equal then lose 




