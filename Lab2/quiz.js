

function Quiz(questions){
    this.score = 0;
    this.questions = questions
    this.questionIndex = 0
}

function Question(text, options, answer){
    this.text = text;
    this.options = options 
    this .answer = answer
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex]
}


Quiz.prototype.checkOptionWithAnswer = function(ans){
    if(this.getQuestionByIndex().answer == ans){
        this.score++
    }
    this.questionIndex++
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex == this.questions.length
}




let questions = [
    new Question("Which festival is known as the festival of colors?", ["Diwali" , "Holi", "Lohri","Christmas"], "Holi"),
    new Question("In which direction does the sunrise?", ["East", "West", "North", "South"], "East"),
    new Question("How many strings does a violin have?", ["Four", "Three", "Five", "Six"], "Four"),
    new Question("How many primary colors are there?", ["3", "5", "7", "1"], "3"),
    new Question("Which are the vowels in the English alphabet series?", ["A,C,E,I,O", "A,E,I,O,U", "E,I,O,U,V", "A,B,C,D,E"], "A,E,I,O,U"),
]


let quiz = new Quiz(questions)

function displayQuestions(){
    if(quiz.isEnded()){
        showScore()
    }else{
        let questionElem = document.getElementById("question")
        questionElem.innerHTML = quiz.getQuestionByIndex().text

        let choices = quiz.getQuestionByIndex().options
        for(let i=0; i<choices.length; i++){
            let elem = document.getElementById("choice"+ i)
            elem.innerHTML=choices[i];
            handleClickOnBtn("btn"+ i, choices[i])
        } 
        showProgress()
    }
}

function showProgress(){
    let curr = quiz.questionIndex +1;
    let elem = document.getElementById("progress")
    elem.innerHTML =`Question ${curr} of ${quiz.questions.length}`
}

function handleClickOnBtn(id, choice){
    let buttonElem = document.getElementById(id)
    buttonElem.onclick = function(){
        quiz.checkOptionWithAnswer(choice)
        displayQuestions()
    }
}

function showScore(){
    let result = `<h1>Result</h1><h2 id="score">Your score is: ${quiz.score}.And mark percentage is: ${(quiz.score/questions.length)*100}%`
    let quizElem = document.getElementById("quiz")
    quizElem.innerHTML = result
}

displayQuestions()