var img = document.getElementById("popIna1");
var count = document.getElementById("score");
var TWScore = document.getElementById('my_score');
var MyScore = 10000;
var score = 0;
var audio = new Audio('wah.mp3');
var hk_score = 20000, tw_score = 10000, th_score = 7000, jp_score = 4500, my_score = 1000 ,fi_score = 2500, se_score = 1000, pl_score = 5000, dm_score = 2800, id_score=5900, hu_score=3190, sr_score = 3000; 

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'popIna2.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'popIna1.png';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'popIna2.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'popIna1.png';
     audio.play();
});


// Score on leaderboard
setInterval(startCountHk, 1);

function startCountHk(){
    hk_score++;
    document.getElementById("table").rows[1].cells.item(3).innerHTML = hk_score;
}

setInterval(startCountTw, 20);

function startCountTw(){
    tw_score++;
    document.getElementById("table").rows[2].cells.item(3).innerHTML = tw_score;
}

setInterval(startCountTh, 25);

function startCountTh(){
    th_score++;
    document.getElementById("table").rows[3].cells.item(3).innerHTML = th_score;
}

setInterval(startCountJp, 15);

function startCountJp(){
    jp_score++;
    document.getElementById("table").rows[4].cells.item(3).innerHTML = jp_score;
}

setInterval(startCountMy, 40);

function startCountMy(){
    my_score++;
    document.getElementById("table").rows[5].cells.item(3).innerHTML = my_score;
}

setInterval(startCountFi, 34);

function startCountFi(){
    fi_score++;
    document.getElementById("table").rows[6].cells.item(3).innerHTML = fi_score;
}

setInterval(startCountSe, 20);

function startCountSe(){
    se_score++;
    document.getElementById("table").rows[7].cells.item(3).innerHTML = se_score;
}

setInterval(startCountPl, 15);

function startCountPl(){
    pl_score++;
    document.getElementById("table").rows[8].cells.item(3).innerHTML = pl_score;
}

setInterval(startCountDm, 31);

function startCountDm(){
    dm_score++;
    document.getElementById("table").rows[9].cells.item(3).innerHTML = dm_score;
}

setInterval(startCountId, 29);

function startCountId(){
    id_score++;
    document.getElementById("table").rows[10].cells.item(3).innerHTML = id_score;
}

setInterval(startCountHu, 70);

function startCountHu(){
    hu_score++;
    document.getElementById("table").rows[11].cells.item(3).innerHTML = hu_score;
}

setInterval(startCountSr, 5);

function startCountSr(){
    sr_score++;
    document.getElementById("table").rows[12].cells.item(3).innerHTML = sr_score;
}

function increaseScore(){
    score++;
    MyScore++;
    count.innerHTML = score;
    TWScore.innerHTML = MyScore;
}
