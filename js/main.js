/* variabili */
let timeCondition = false;
let tenths = 0;
let second = 0;
let minute = 0;
let hour = 0;
let lap = 0;
let cronometro;
let contClick= 0;

function timer(){
    tenths++;

    /* calcolo secondi */
    if(tenths == 10) {
        second++;
        tenths= 0;
    }

    /* calcolo dei minuti */
    if(second==60) {
        second=0;
        minute++;
    }

    /* calcolo ore */
    if(minute==60) {
        minute=0;
        hour++;
    }
    let formatTimer = (hour < 10 ? '0' + hour : hour) +
    ' : ' + (minute < 10 ? '0' + minute : minute) +
    ' : ' + (second < 10 ? '0' + second : second) +
    ' : ' + (tenths < 10 ? '0' + tenths : tenths);
    document.getElementById('timerCont').innerHTML = formatTimer;
}

/* start */
function startTimer() {
    if(contClick==0) {
        contClick++;
        cronometro = setInterval(() => {timer();}, 100);
    }
}

/* pause */
function pauseTimer() {
    contClick = 0;
    clearInterval(cronometro);
}

/* stop */
function stopTimer() {
    contClick = 0;
    second = 0;
    clearInterval(cronometro);
    document.getElementById('timerCont').innerHTML = ' 00 : 00 : 00 : 00 ';
}

/* takeLaps */
function takeLap() {
    if(contClick!=0) {
        lap++;
        formatTimer = (hour < 10 ? '0' + hour + ' h' : hour + ' h') +
        ' : ' + (minute < 10 ? '0' +  minute + ' min' : minute + ' min') +
        ' : ' + (second < 10 ? '0' + second + ' s' : second + ' s') +
        ' : ' + (tenths < 10 ? '0' + tenths + ' ds' : tenths + ' ds');
        document.getElementById('time_laps').innerHTML += `<h2> posizione: ${lap} -> ${formatTimer} </h2>`;
        document.getElementById('positions').innerHTML = `<h2> RECORDS: ${lap}`;
        document.getElementById('resetAll').innerHTML = 'RESET'
    }
}

/* resetLaps */
function resetLaps() {
    timeCondition = false;
    tenths = 0;
    second = 0;
    minute = 0;
    hour = 0;
    lap = 0;
    contClick = 0;
    lap = 0;
    clearInterval(cronometro);
    document.getElementById('timerCont').innerHTML = ' 00 : 00 : 00 : 00 ';
    document.getElementById('time_laps').innerHTML = '';
    document.getElementById('positions').innerHTML = '';
    document.getElementById('resetAll').innerHTML = ''
}