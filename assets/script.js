const paragraphs_1 = document.getElementById("paragraphs_1");
const paragraphs_2 = document.getElementById("paragraphs_2");
const paragraphs_3 = document.getElementById("paragraphs_3");
const paragraphs_4 = document.getElementById("paragraphs_4");
const paragraphs_5 = document.getElementById("paragraphs_5");

const paragraphs_number = document.getElementById("paragraphs_number");
const reset = document.getElementById("reset");

const paragraph_1 = document.getElementById("paragraph_1");
const paragraph_textarea_1 = document.getElementById("paragraph_textarea_1");
const paragraph_color_1 = document.getElementById("paragraph_color_1");
const paragraph_number_1 = document.getElementById("paragraph_number_1");

const paragraph_2 = document.getElementById("paragraph_2");
const paragraph_textarea_2 = document.getElementById("paragraph_textarea_2");
const paragraph_color_2 = document.getElementById("paragraph_color_2");
const paragraph_number_2 = document.getElementById("paragraph_number_2");

const paragraph_3 = document.getElementById("paragraph_3");
const paragraph_textarea_3 = document.getElementById("paragraph_textarea_3");
const paragraph_color_3 = document.getElementById("paragraph_color_3");
const paragraph_number_3 = document.getElementById("paragraph_number_3");

const paragraph_4 = document.getElementById("paragraph_4");
const paragraph_textarea_4 = document.getElementById("paragraph_textarea_4");
const paragraph_color_4 = document.getElementById("paragraph_color_4");
const paragraph_number_4 = document.getElementById("paragraph_number_4");

const paragraph_5 = document.getElementById("paragraph_5");
const paragraph_textarea_5 = document.getElementById("paragraph_textarea_5");
const paragraph_color_5 = document.getElementById("paragraph_color_5");
const paragraph_number_5 = document.getElementById("paragraph_number_5");

paragraphs_number.onchange  = function () {
    if (paragraphs_number.value == "") {
        paragraphs_number.value = 1;
        paragraphs_1_reset();
    }
}

paragraphs_number.oninput = function () {
    let x = paragraphs_number.value;
    if (paragraphs_number.value == "")
        return;
    if (!(x > 0 && x < 6)) {
        paragraphs_1_reset();
        paragraphs_number.value = 1;
        return;
    }

    switch (Number(paragraphs_number.value)) {
        case 1:
            paragraphs_1_reset();
            break;
        case 2:
            paragraphs_2.style.display = "block";
            paragraph_2.style.display = "block";
            paragraphs_3.style.display = "none";
            paragraph_3.style.display = "none";
            paragraphs_4.style.display = "none";
            paragraph_4.style.display = "none";
            paragraphs_5.style.display = "none";
            paragraph_5.style.display = "none";
            break;
        case 3:
            paragraphs_2.style.display = "block";
            paragraph_2.style.display = "block";
            paragraphs_3.style.display = "block";
            paragraph_3.style.display = "block";
            paragraphs_4.style.display = "none";
            paragraph_4.style.display = "none";
            paragraphs_5.style.display = "none";
            paragraph_5.style.display = "none";
            break;
        case 4:
            paragraphs_2.style.display = "block";
            paragraph_2.style.display = "block";
            paragraphs_3.style.display = "block";
            paragraph_3.style.display = "block";
            paragraphs_4.style.display = "block";
            paragraph_4.style.display = "block";
            paragraphs_5.style.display = "none";
            paragraph_5.style.display = "none";
            break;
        case 5:
            paragraphs_2.style.display = "block";
            paragraph_2.style.display = "block";
            paragraphs_3.style.display = "block";
            paragraph_3.style.display = "block";
            paragraphs_4.style.display = "block";
            paragraph_4.style.display = "block";
            paragraphs_5.style.display = "block";
            paragraph_5.style.display = "block";
            break;
    }

}

function paragraphs_1_reset () {
    paragraphs_2.style.display = "none";
    paragraph_2.style.display = "none";
    paragraphs_3.style.display = "none";
    paragraph_3.style.display = "none";
    paragraphs_4.style.display = "none";
    paragraph_4.style.display = "none";
    paragraphs_5.style.display = "none";
    paragraph_5.style.display = "none";
}

reset.onclick = function () {
    paragraphs_number.value = 1;

    paragraphs_1.innerHTML = "Tekst do akapitu pierwszego";
    paragraph_textarea_1.value = "";
    paragraph_color_1.value = "#000000";
    paragraph_number_1.value = 0;
    paragraphs_1.style.textIndent = 0 + "px";
    paragraphs_1.style.backgroundColor = ""

    paragraphs_2.style.display = "none";
    paragraph_2.style.display = "none";
    paragraphs_2.innerHTML = "Tekst do akapitu pierwszego";
    paragraph_textarea_2.value = "";
    paragraph_color_2.value = "#000000";
    paragraph_number_2.value = 0;
    paragraphs_2.style.textIndent = 0 + "px";
    paragraphs_2.style.backgroundColor = ""

    paragraphs_3.style.display = "none";
    paragraph_3.style.display = "none";
    paragraphs_3.innerHTML = "Tekst do akapitu pierwszego";
    paragraph_textarea_3.value = "";
    paragraph_color_3.value = "#000000";
    paragraph_number_3.value = 0;
    paragraphs_3.style.textIndent = 0 + "px";
    paragraphs_3.style.backgroundColor = ""

    paragraphs_4.style.display = "none";
    paragraph_4.style.display = "none";
    paragraphs_4.innerHTML = "Tekst do akapitu pierwszego";
    paragraph_textarea_4.value = "";
    paragraph_color_4.value = "#000000";
    paragraph_number_4.value = 0;
    paragraphs_4.style.textIndent = 0 + "px";
    paragraphs_4.style.backgroundColor = ""

    paragraphs_5.style.display = "none";
    paragraph_5.style.display = "none";
    paragraphs_5.innerHTML = "Tekst do akapitu pierwszego";
    paragraph_textarea_5.value = "";
    paragraph_color_5.value = "#000000";
    paragraph_number_5.value = 0;
    paragraphs_5.style.textIndent = 0 + "px";
    paragraphs_5.style.backgroundColor = ""
}

paragraph_number_1.onchange = function () {
    if (paragraph_number_1.value == "") {
        paragraph_number_1.value = 0;
        paragraphs_1.style.textIndent = 0 + "px";
    }
}

paragraph_number_1.oninput = function () {
    let x = paragraph_number_1.value;
    if (x == "")
        return;
    if (!(x > 0 && x < 9999)) {
        paragraph_number_1.value = 0;
        paragraphs_1.style.textIndent = 0 + "px";
        return;
    }
    paragraphs_1.style.textIndent = x + "px";
}

paragraph_number_2.onchange = function () {
    if (paragraph_number_2.value == "") {
        paragraph_number_2.value = 0;
        paragraphs_2.style.textIndent = 0 + "px";
    }
}

paragraph_number_2.oninput = function () {
    let x = paragraph_number_2.value;
    if (x == "")
        return;
    if (!(x > 0 && x < 9999)) {
        paragraph_number_2.value = 0;
        paragraphs_2.style.textIndent = 0 + "px";
        return;
    }
    paragraphs_2.style.textIndent = x + "px";
}

paragraph_number_3.onchange = function () {
    if (paragraph_number_3.value == "") {
        paragraph_number_3.value = 0;
        paragraphs_3.style.textIndent = 0 + "px";
    }
}

paragraph_number_3.oninput = function () {
    let x = paragraph_number_3.value;
    if (x == "")
        return;
    if (!(x > 0 && x < 9999)) {
        paragraph_number_3.value = 0;
        paragraphs_3.style.textIndent = 0 + "px";
        return;
    }
    paragraphs_3.style.textIndent = x + "px";
}

paragraph_number_4.onchange = function () {
    if (paragraph_number_4.value == "") {
        paragraph_number_4.value = 0;
        paragraphs_4.style.textIndent = 0 + "px";
    }
}

paragraph_number_4.oninput = function () {
    let x = paragraph_number_4.value;
    if (x == "")
        return;
    if (!(x > 0 && x < 9999)) {
        paragraph_number_4.value = 0;
        paragraphs_4.style.textIndent = 0 + "px";
        return;
    }
    paragraphs_4.style.textIndent = x + "px";
}

paragraph_number_5.onchange = function () {
    if (paragraph_number_5.value == "") {
        paragraph_number_5.value = 0;
        paragraphs_5.style.textIndent = 0 + "px";
    }
}

paragraph_number_5.oninput = function () {
    let x = paragraph_number_5.value;
    if (x == "")
        return;
    if (!(x > 0 && x < 9999)) {
        paragraph_number_5.value = 0;
        paragraphs_5.style.textIndent = 0 + "px";
        return;
    }
    paragraphs_5.style.textIndent = x + "px";
}

paragraph_textarea_1.oninput = function () {
    paragraphs_1.innerHTML = paragraph_textarea_1.value;
    if (paragraph_textarea_1.value == "") {
        paragraphs_1.innerHTML = "{paragraph_1}";
    }
}

paragraph_textarea_2.oninput = function () {
    paragraphs_2.innerHTML = paragraph_textarea_2.value;
    if (paragraph_textarea_2.value == "") {
        paragraphs_2.innerHTML = "{paragraph_2}";
    }
}

paragraph_textarea_3.oninput = function () {
    paragraphs_3.innerHTML = paragraph_textarea_3.value;
    if (paragraph_textarea_3.value == "") {
        paragraphs_3.innerHTML = "{paragraph_3}";
    }
}

paragraph_textarea_4.oninput = function () {
    paragraphs_4.innerHTML = paragraph_textarea_4.value;
    if (paragraph_textarea_4.value == "") {
        paragraphs_4.innerHTML = "{paragraph_4}";
    }
}

paragraph_textarea_5.oninput = function () {
    paragraphs_5.innerHTML = paragraph_textarea_5.value;
    if (paragraph_textarea_5.value == "") {
        paragraphs_5.innerHTML = "{paragraph_5}";
    }
}

paragraph_color_1.oninput = function () {
    paragraphs_1.style.backgroundColor = paragraph_color_1.value;
}

paragraph_color_2.oninput = function () {
    paragraphs_2.style.backgroundColor = paragraph_color_2.value;
}

paragraph_color_3.oninput = function () {
    paragraphs_3.style.backgroundColor = paragraph_color_3.value;
}

paragraph_color_4.oninput = function () {
    paragraphs_4.style.backgroundColor = paragraph_color_4.value;
}

paragraph_color_5.oninput = function () {
    paragraphs_5.style.backgroundColor = paragraph_color_5.value;
}