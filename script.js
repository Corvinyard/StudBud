var input = document.getElementById("uploadWorkBackground");
var preview = document.getElementById("workBox");
var thirtytimer;
var previewURL;

input.addEventListener('input', () => {

    var uploadedWorkFile = input.files[0];
    previewURL = URL.createObjectURL(uploadedWorkFile);

    var img = document.createElement('img');
    img.src = previewURL;
    img.className = "imageLaws";
    workBox.innerHTML = "";

    workBox.appendChild(img);
});

const input2 = document.getElementById("uploadRestBackground");
const preview2 = document.getElementById("restBox");
var url2;
input2.addEventListener('input', () => {

    var uploadedRestFile = input2.files[0];
    url2 = URL.createObjectURL(uploadedRestFile);

    const img2 = document.createElement('img');
    img2.src = url2;
    img2.className = "imageLaws";
    restBox.innerHTML = "";

    restBox.appendChild(img2);
});

function EndButton() {
    owarase();
}

function playSound(url) {
    new Audio(url).play();
}

var workphase;
var restphase;
var repeats = document.getElementById('repeat');
var switchsoundeffect = document.getElementById('p5xchest');
var todoCompletes = 0;
var level = 1;
var kir = 0;

var stopTime = false;
function zaWarudo() {
    if (stopTime === false) {
        stopTime = true;
        document.getElementById('pausegling').style.display = "none";
        document.getElementById('playgling').style.display = "block";
        document.getElementById('zwstart').volume = 0.2;
        document.getElementById('zwstart').play();
    }
    else {
        stopTime = false;
        document.getElementById('pausegling').style.display = "block";
        document.getElementById('playgling').style.display = "none";
        document.getElementById('zwstop').volume = 0.2;
        document.getElementById('zwstop').play();
    }
}


function StartButton() {
    if (document.getElementById('min').value > 0 && document.getElementById('min2').value > 0) {

        workphase = true;
        var min = document.getElementById('min').value;
        var sec = 0;
        if (repeats.value === "") {
            repeats.value = 1;
        }
        var nezha = repeats.value;


        function subtractSeconds() {
            if (workphase && stopTime === false) {
                document.getElementById('workOrRest').textContent = "Work phase";
                document.getElementById('workOrRest').style.color = "95A3B3";
                document.getElementById('bidi').style.color = "95A3B3";

                if (sec > 0) {
                    sec--;
                    document.getElementById('bidi').textContent = min + ":" + sec;
                }
                if (sec <= 0 && !min <= 0) {
                    sec = 59;
                    min--;
                    document.getElementById('bidi').textContent = min + ":" + sec;
                    kir++;
                }
                if (sec.length === 1) {
                    document.getElementById('bidi').textContent = min + ":" + sec;
                }
                if (min <= 0 && sec <= 0 && repeats.value > 0) {
                    min = 0;
                    sec = 0;
                    document.getElementById('bidi').textContent = min + ":" + sec;
                    if (input2.files.length === 1) {
                        document.getElementById('content').style.backgroundImage = "url('" + url2 + "')";
                    }
                    if (input2.files.length != 1) {
                        document.getElementById('content').style.backgroundImage = "url('Misc/persona4reading.gif')";
                    }
                    workphase = false;
                    restphase = true;
                    min2 = document.getElementById('min2').value;
                    sec2 = 0;
                    switchsoundeffect.play();
                }
            }
        }
        setInterval(subtractSeconds, 1000);


        var min2 = document.getElementById('min2').value;
        var sec2 = 0
        function changeup() {
            if (restphase && stopTime === false) {
                document.getElementById('workOrRest').textContent = "Rest phase";
                document.getElementById('workOrRest').style.color = "AFBE8F";
                document.getElementById('bidi').style.color = "AFBE8F";
                document.getElementById('bidi').textContent = min2 + ":" + sec2;
                if (sec2 > 0) {
                    sec2--;
                }
                if (sec2 <= 0 && !min2 <= 0) {
                    sec2 = 59;
                    min2--;
                }
                if (min2 <= 0 && sec2 <= 0 && repeats.value >= 1) {
                    min2 = 0;
                    sec2 = 0;
                    if (input.files.length === 1) {
                        document.getElementById('content').style.backgroundImage = "url('" + previewURL + "')";
                    }
                    if (input.files.length != 1) {
                        document.getElementById('content').style.backgroundImage = "url('Misc/persona4study.gif')";
                    }
                    workphase = true;
                    restphase = false;
                    min = document.getElementById('min').value;
                    sec = 0;
                    document.getElementById('bidi').textContent = min + ":" + sec;
                    repeats.value--;
                    repeats.textContent = repeats;
                    switchsoundeffect.play();
                    if (repeats.value >= 1) {
                        level++;
                    }
                    console.log(repeats);
                }
                if (min2 <= 0 && sec2 <= 0 && repeats.value <= 0) {
                    owarase()
                }
            }
        }
        setInterval(changeup, 1000);


        document.getElementById('StartButton').style.display = "none";
        document.getElementById('EndButton').style.display = "block";
        document.getElementById('workStartScreen').style.display = "none";
        document.getElementById('restStartScreen').style.display = "none";
        document.getElementById('mainMenu').style.display = "none";
        document.getElementById('repeatOnly').style.display = "none";
        document.getElementById('pausegling').hidden = false;
        document.getElementById('pausegling').style.display = "block";
        function nas() {
            document.getElementById('repeatFamily').textContent = "Set \n" + level + "/" + nezha;
        }
        setInterval(nas);

        if (input.files.length === 1) {
            document.getElementById('content').style.backgroundImage = "url('" + previewURL + "')";
        }
        if (input.files.length != 1) {
            document.getElementById('content').style.backgroundImage = "url('Misc/persona4study.gif')";
        }
        document.getElementById('bidi').textContent = min + ":" + sec;
    }
    else {
        alert('Please fill out all time fields!');
    }
}

function pilgrammedTheRaindrops() {
    var checkbox = document.getElementById('rain');

    if (checkbox.checked == true && (workphase || restphase)) {
        var playRain = document.getElementById('rainSounds');
        playRain.play();
    } else {
        var playRain = document.getElementById('rainSounds');
        playRain.pause();
    }
}
setInterval(pilgrammedTheRaindrops);

function pilgrammedTheFiredrops() {
    var checkbox = document.getElementById('fire');

    if (checkbox.checked == true && (workphase || restphase)) {
        var playFire = document.getElementById('fireSounds');
        playFire.play();
    } else {
        var playFire = document.getElementById('fireSounds');
        playFire.pause();
    }
}
setInterval(pilgrammedTheFiredrops);



document.getElementById('EndButton').style.display = "none";


let inputEl = document.getElementById('repeat');
inputEl.addEventListener("input", () => {
    let value = inputEl.value;
    const regex = /^\d+$/;
    const isValid = regex.test(value);

    if (!isValid) {
        inputEl.value = value.slice(0, value.length - 1);
    }
});
let inputEl2 = document.getElementById('min');
inputEl2.addEventListener("input", () => {
    let value = inputEl2.value;
    const regex = /^\d+$/;
    const isValid = regex.test(value);

    if (!isValid) {
        inputEl2.value = value.slice(0, value.length - 1);
    }
});

let inputEl3 = document.getElementById('min2');
inputEl3.addEventListener("input", () => {
    let value = inputEl3.value;
    const regex = /^\d+$/;
    const isValid = regex.test(value);

    if (!isValid) {
        inputEl3.value = value.slice(0, value.length - 1);
    }
});


function addtodo() {
    var li = document.createElement('div');
    li.style.padding = "2%";
    li.style.margin = "2%";
    var userInput = document.getElementById('todoInput').value;
    var theirtext = document.createTextNode(userInput);


    if (userInput === "") {

    }

    if (userInput !== "") {
        li.appendChild(theirtext);
        document.getElementById('todobox').appendChild(li);
        li.className = "todolistitem";
        document.getElementById('todoInput').value = "";
    }

    li.addEventListener("click", function () {
        this.remove();

        if (workphase || restphase) {
            todoCompletes++;
        }
    });

}

function myFunction(event) {
    if (event.key === "Enter") {
        addtodo();
    }
}

function minutesWorked() {
    document.getElementById('summon').play();
    document.getElementById('b1').textContent = kir;
}
function tasksCompleted() {
    document.getElementById('summon').play();
    document.getElementById('b2').textContent = todoCompletes;
}
function message() {
    document.getElementById('summon').play();

    if (((document.getElementById('min').value) * level) <= 30) {
        document.getElementById('b3').textContent = "Nice work! You did great.";
    }
    if (((document.getElementById('min').value) * level) === (60 || 120)) {
        document.getElementById('b3').textContent = "Amazing! Keep this up and you'll become a pro in no time.";
    }
    if (((document.getElementById('min').value) * level) === (64)) {
        document.getElementById('b3').textContent = "Great vegetables.";
    }
    if (((document.getElementById('min').value) * level) >= 100) {
        document.getElementById('b3').textContent = "Radical speed! I think you're a genius.";
    }
    if (((document.getElementById('min').value) * level) >= 70 && todoCompletes >= 5) {
        document.getElementById('b3').textContent = "That's some proud desire! Keep fighting!!";
    }
}

function startTime(event) {
    if (event.key === "Enter") {
        StartButton();
    }
}

function owarase() {
    workphase = false;
    restphase = false;
    document.getElementById('bidi').remove();
    document.getElementById('workOrRest').remove();
    document.getElementById('pausegling').remove();
    document.getElementById('playgling').remove();
    var results = document.getElementById('music');
    results.play();
    results.volume = 0.1;

    document.getElementById('content').style.backgroundImage = "url('Misc/persona4dancing2.gif')";
    var topScreen = document.getElementById('topScreen')
    topScreen.style.fontSize = "40px";

    document.getElementById('minutesWorked').style.display = "contents";
    document.getElementById('tasksCompleted').style.display = "contents";
    document.getElementById('message').style.display = "contents";
}