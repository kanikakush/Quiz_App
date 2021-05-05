window.onload = function () {
    show(0);
}
let questionslist = [
    {
        id: 1,
        question: "Nobel prize is awarded for which of the following disciplines",
        answer: "All the above",
        options: [
            "Literature, peace and economics",
            "Medicine or Physiology",
            "Chemistry and Physics",
            "All the above"
        ]
    },
    {
        id: 2,
        question: "Garampani Sanctuary is locate in which of the following places:",
        answer: "Diphu, Assam",
        options: [
            "Junagarh, Gujarat",
            "Kohima, Nagaland",
            "Diphu, Assam",
            "Gangtok, Sikkim"
        ]

    },
    {
        id: 3,
        question: "Entomology studies what?",
        answer: "Insects",
        options: [
            "Behavior of human beings",
            "Insects",
            "The origin and history of technical and scientific terms",
            "The formation of rocks"
        ]
    },
    {
        id: 4,
        question: "Galileo was an astronomer who?",
        answer: "discovered four satellites of Jupiter",
        options: [
            "developed the telescope",
            "discovered four satellites of Jupiter",
            "discovered that the movement of pendulum produces a regular time measurement",
            "All the above."


        ]
    },
    {
        id: 5,
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        answer: "largest railway station",
        options: [
            "highest railway station",
            "discovered four satellites of Jupiter",
            "longest railway station",
            "None of the above"


        ]
    }
]

function submitForm(e) {
    e.preventDefault();
    let name1 = document.forms["welcome_form"]["username"].value;
    //store player's name
    sessionStorage.setItem("keyname", name1);
    location.href = "Quiz.html";
}
let question_count = 0;
let point = 0;
function next() {
       let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questionslist[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points",point);
    }
    if(question_count==questionslist.length-1)
    {
        sessionStorage.setItem("time",`${minute} minutes and ${second} seconds...`);
        clearInterval(mytime);
        location.href="lastpage.html";
        return;
    }
    question_count++;
    show(question_count);
}
function show(count) {
    let question = document.getElementById("questions");
    question.innerHTML = `<h2> Q.${count+1} ${questionslist[count].question}</h2> 
    <ul class="option_group">
        <li class="option">${questionslist[count].options[0]}</li>
        <li class="option">${questionslist[count].options[1]}</li>
        <li class="option">${questionslist[count].options[2]}</li>
        <li class="option">${questionslist[count].options[3]}</li>
    </ul>`;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {

            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }

}