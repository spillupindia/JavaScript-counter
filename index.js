let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let tem_sec = 0;
let tem_min = parseInt(prompt("Enter  Minutes: "));
let tem_hou = parseInt(prompt("Enter Hours :"));
let clear_counter = setInterval(() => {
    tem_sec -= 1;
    if (tem_sec == 0 && tem_min == 0 && tem_hou == 0) {
        clearInterval(clear_counter)
        alert("Stop")
    }else if (tem_sec >= 0) {
        seconds.innerText = tem_sec;
    } else {
        tem_sec = 60;
        tem_sec -= 1;
        seconds.innerText = tem_sec;
        tem_min -= 1;
        if (tem_min >= 0) {
            minutes.innerText = tem_min;
        } else {
            tem_min = 60;
            tem_min -= 1;
            minutes.innerText = tem_min;
            tem_hou -= 1;
            if (tem_hou >= 0) {
                hours.innerText = tem_hou;
            } else {
                tem_hou = 24;
                tem_hou -= 1;
                hours.innerText = tem_hou;
            }
        }
    }
}, 1000)