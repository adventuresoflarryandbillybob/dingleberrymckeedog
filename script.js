let num = 0;
function yes() {
    let arr = document.getElementsByClassName('heart');
    for (var i=0; i<arr.length; i++) {
        arr[i].classList.add('pulse');
    }
   arr = document.getElementsByClassName('heartL');
    for (var i=0; i<arr.length; i++) {
        arr[i].classList.add('pulse');
    }
    arr = document.getElementsByClassName('heartR');
    for (var i=0; i<arr.length; i++) {
        arr[i].classList.add('pulse');
    }
    document.getElementById("l-ball").classList.add("ball");
    document.getElementById("face-l").classList.add("face");
    document.getElementById("face-l").classList.add("face-l");
    document.getElementById("l-eye-l").classList.add("eye");
    document.getElementById("l-eye-l").classList.add("eye-l");
    document.getElementById("l-eye-r").classList.add("eye");
    document.getElementById("l-eye-r").classList.add("eye-r");
    document.getElementById("l-mouth").classList.add("mouth");
    //
    document.getElementById("r-ball").classList.add("ball");
    document.getElementById("face-r").classList.add("face");
    document.getElementById("face-r").classList.add("face-r");
    document.getElementById("r-eye-l").classList.add("eye");
    document.getElementById("r-eye-l").classList.add("eye-l");
    document.getElementById("r-eye-l").classList.add("eye-r-p");
    document.getElementById("r-eye-r").classList.add("eye");
    document.getElementById("r-eye-r").classList.add("eye-r");
    document.getElementById("r-eye-r").classList.add("eye-r-p");
    document.getElementById("r-mouth").classList.add("mouth");
    document.getElementById("r-mouth").classList.add("mouth-r");
    //
    document.getElementById("no").innerText = "Nevermind :/";
    document.getElementById("yes").innerText = "Yes";
    if (num == 1) {
        alert("Problem resolved.")
    }
    num = 0;
}

function no() {
    document.getElementById("l-ball").classList.remove("ball");
    document.getElementById("face-l").classList.remove("face");
    document.getElementById("face-l").classList.remove("face-l");
    document.getElementById("l-eye-l").classList.remove("eye");
    document.getElementById("l-eye-l").classList.remove("eye-l");
    document.getElementById("l-eye-r").classList.remove("eye");
    document.getElementById("l-eye-r").classList.remove("eye-r");
    document.getElementById("l-mouth").classList.remove("mouth");
    //
    document.getElementById("r-ball").classList.remove("ball");
    document.getElementById("face-r").classList.remove("face");
    document.getElementById("face-r").classList.remove("face-r");
    document.getElementById("r-eye-l").classList.remove("eye");
    document.getElementById("r-eye-l").classList.remove("eye-l");
    document.getElementById("r-eye-l").classList.remove("eye-r-p");
    document.getElementById("r-eye-r").classList.remove("eye");
    document.getElementById("r-eye-r").classList.remove("eye-r");
    document.getElementById("r-eye-r").classList.remove("eye-r-p");
    document.getElementById("r-mouth").classList.remove("mouth");
    document.getElementById("r-mouth").classList.remove("mouth-r");
    let arr = document.getElementsByClassName('heart');
    for (var i=0; i<arr.length; i++) {
        arr[i].classList.remove('pulse');
        arr[i].classList.add('hb');
    }
   arr = document.getElementsByClassName('heartL');
    for (var i=0; i<arr.length; i++) {
        arr[i].classList.remove('pulse');
        arr[i].classList.add('hb');
    }
    arr = document.getElementsByClassName('heartR');
    for (var i=0; i<arr.length; i++) {
        arr[i].classList.remove('pulse');
        arr[i].classList.add('hb');
    }
    document.getElementById("no").innerText = "No";
    document.getElementById("yes").innerText = "WAIT YES!";
    window.open("v.vbs");
    num = 1;
}