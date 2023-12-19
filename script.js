function citychange() {
    alert("Loading weather report...")
}

function acceptcookie(id) {
    let element = document.getElementById(id);
    console.log(id);
    element.remove();
}

function convertTemp(value) {
    // if statement of C or F
    let temp = document.querySelectorAll('.temp');
    if (value === 'f') {
        console.log(temp);
        for (let i = 0; i < temp.length; i++) {
            let value = parseInt(temp[i].innerText);
            console.log(value);
            value = Math.round((value * 9 / 5) + 32);
            temp[i].innerText = value;
        }
    }
    else {
        console.log(temp);
        for (let i = 0; i < temp.length; i++) {
            let value = parseInt(temp[i].innerText);
            console.log(value);
            value = Math.round((value - 32) * 5 / 9);
            temp[i].innerText = value;
        }
    }
}