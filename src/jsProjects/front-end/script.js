var masterModule = (function () {
    var state = false; // Private Variable
    var options = ['first', 'second', 'third', 'fourth'];
    var sequence = [];
    var playerSeq = [];
    var count = 1;
    var strict = false;

    var pub = {};// public object - returned at end of module

    pub.getStrict = function () {
        return strict;
    };

    pub.setStrict = function (bool) {
        strict = bool;
    };

    pub.getCount = function () {
        return count;
    };

    pub.resetCount = function () {
        count = 1;
    };

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function () {
        return state;
    };
    pub.getOptions = function () {
        return options;
    };
    pub.getSequence = function () {
        return sequence;
    };
    pub.addSequence = function () {
        sequence.push(options[Math.floor(Math.random() * 4)]);
        count += 1;
    };
    pub.clearSequence = function () {
        sequence = [];
    };

    pub.getPlayerSeq = function () {
        return playerSeq;
    };
    pub.addPlayerSeq = function (input) {
        playerSeq.push(input);
    };
    pub.clearPlayerSeq = function () {
        playerSeq = [];
    };


    return pub; // expose externally
}());

function getSound(colorId) {
    switch (colorId) {
        case ("first"):
            return new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play();
        case ("second"):
            return new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();
        case ("third"):
            return new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play();
        case ("fourth"):
            return new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play();
    }
}

function getHighLight(colorId) {
    switch (colorId) {
        case ("first"):
            return "#00ff6e";
        case ("second"):
            return "#ff000c";
        case ("third"):
            return "#ffd942";
        case ("fourth"):
            return "#2b95ff";
    }
}

function changeColor(selected, color) {
    selected.css("background-color", color);
}

function startSequence() {
    $("#dashes").html(masterModule.getCount());
    masterModule.addSequence();
    // var compSequence = masterModule.getSequence();

    var counter = 0;
    var inter = setInterval(function () {
        if (masterModule.getState() === false) {
            return;
        }
        react(masterModule.getSequence()[counter]);
        counter += 1;
        if (counter > masterModule.getSequence().length) {
            clearInterval(inter);
        }
    }, 1000);
    if (masterModule.getState() === false) {
        //this is not running!!!!!!!!!!!!!!!!
        console.log('this ran');
        return;
    }

    masterModule.clearPlayerSeq();
}

function redoSequence() {
    var compSequence = masterModule.getSequence();
    var counter = 0;
    var inter = setInterval(function () {
        react(compSequence[counter]);
        counter += 1;
        if (counter > compSequence.length) {
            clearInterval(inter);
        }
    }, 1000);
    masterModule.clearPlayerSeq();
}


function react(id) {
    getSound(id);
    //consider making these lines a function for sound since it is being used in wrongMove()
    var prevBack = $('#' + id).css("background-color");
    var highlighted = getHighLight(id);
    $('#' + id).css("background-color", highlighted);
    setTimeout(function () { changeColor($('#' + id), prevBack) }, 200);
}

function wrongMove() {
    var prevBack1 = $('#' + 'first').css("background-color");
    $('#' + 'first').css("background-color", 'red');
    setTimeout(function () { changeColor($('#' + 'first'), prevBack1) }, 200);

    var prevBack2 = $('#' + 'second').css("background-color");
    $('#' + 'second').css("background-color", 'red');
    setTimeout(function () { changeColor($('#' + 'second'), prevBack2) }, 200);

    var prevBack3 = $('#' + 'third').css("background-color");
    $('#' + 'third').css("background-color", 'red');
    setTimeout(function () { changeColor($('#' + 'third'), prevBack3) }, 200);

    var prevBack4 = $('#' + 'fourth').css("background-color");
    $('#' + 'fourth').css("background-color", 'red');
    setTimeout(function () { changeColor($('#' + 'fourth'), prevBack4) }, 200);

}

function compare() {
    // var correct;
    var playerSeq = masterModule.getPlayerSeq();
    var compSeq = masterModule.getSequence();
    for (var i = 0; i < playerSeq.length; i++) {
        if (playerSeq[i] !== compSeq[i]) {
            var counter = 0;
            var inter = setInterval(function () {
                wrongMove();
                counter += 1;
                if (counter > 2) {
                    clearInterval(inter);
                }
            }, 200);

            if (masterModule.getStrict()) {
                masterModule.clearSequence();
                masterModule.clearPlayerSeq();
                masterModule.resetCount();
                $("#dashes").html("--");
                startSequence();
                return;
            } else {
                redoSequence();
                return;
            }

        }


    }

    if ((masterModule.getPlayerSeq().length === masterModule.getSequence().length) && masterModule.getPlayerSeq().length === 15) {
        victory();
    } else {
        setTimeout(function () { startSequence() }, 1500);
    }

}

function victory() {
    var counter = 0;
    var victorySeq = ['first', 'second', 'third', 'fourth', 'first', 'second', 'third', 'fourth', 'first', 'second', 'third', 'fourth'];
    var inter = setInterval(function () {
        react(victorySeq[counter]);
        counter += 1;
        if (counter > victorySeq.length) {
            clearInterval(inter);
        }
    }, 150);

    $("#messages").html("YOU WIN!!!!")
    setTimeout(reset, 2500);

}

function reset() {
    masterModule.clearSequence();
    masterModule.clearPlayerSeq();
    masterModule.resetCount();
    $("#dashes").html("--");
    $("#messages").html("");

    $('#first').attr("background-color", "#00a74a");
    $('#second').attr("background-color", "#9f0f17");
    $('#third').attr("background-color", "#cca707");
    $('#fourth').attr("background-color", "#094a8f");

}


$("#on-off").on("click", function () {
    $("#left-side").toggle();
    $("#right-side").toggle();
    if (masterModule.getState() === false) {
        masterModule.changeState(true);
        // startSequence();
    } else {
        masterModule.changeState(false);
        //refactro into function for resetting game
        masterModule.clearSequence();
        masterModule.clearPlayerSeq();
        masterModule.resetCount();
        $("#dashes").html("--");
    }

});

$("#start").on("click", function () {
    if (masterModule.getState() === true) {
        startSequence();
    }


});

$(".colors").on('click', function () {
    var getId = $(this).attr("id");
    //HIGHLIGHT AND SOUND---------------------------------------
    if (masterModule.getState() === true) {
        react(getId);
    }
    //LOGIC FOR GAME
    masterModule.addPlayerSeq(getId);
    if (masterModule.getPlayerSeq().length === masterModule.getSequence().length) {
        compare();
    }

});

$("#strict").on("click", function () {
    if (masterModule.getCount() !== 1) {
        $("#messages").html("strict mode must be enabled at beginning of round");
        $("#messages").append("<div class='btn'>OK</div>")
    } else if (masterModule.getStrict() === true) {
        masterModule.setStrict(false);
        $("#messages").html("");
    } else if (masterModule.getStrict() === false) {
        masterModule.setStrict(true);
        $("#messages").html("strict mode enabled");
    }
});

$("#messages").on("click", function () {
    console.log("ok");
    $("#messages").html("");
});