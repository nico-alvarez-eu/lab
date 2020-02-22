/* Logic for the handling of questions and quizzes */
window.addEventListener("load", (e) => {
    if (localStorage) {
        // If the quiz was already taken, do not show it
        let path = window.location.pathname,
            pathAtoms = path.split("/"),
            courseName = pathAtoms[3];

        // There cannot be more than 50 quizzes in a lesson
        for (let i=1; i < 51; i++) {
            let questionNum = `${courseName}-q${i}`,
                questionBool = `${questionNum}-question_isAnswered`,
                questionId = `${questionNum}-question_question`,
                answerId = `${questionNum}-question_answer`,
                answersContainerId = `${questionNum}-answers-container`,
                ownAnswerContainerId = `${questionNum}-oa`,
                questionMadeContainerId = `${questionNum}-qm`,
                ownAnswerId = `${questionNum}-oa_done`,
                questionMadeId = `${questionNum}-qm_done`,
                responseId = `${questionNum}-question_response`;
            // Fetch all questions that were not answered yet
            if (document.getElementById(answersContainerId)) {
                let answersContainer = document.getElementById(answersContainerId);
                answersContainer.classList.remove("none");
                answersContainer.classList.add("block");
                // Do not show the questions that were already answered
                if (localStorage.getItem(questionBool) === "true") {
                    let ownAnswerContainer = document.getElementById(ownAnswerContainerId),
                        questionMadeContainer = document.getElementById(questionMadeContainerId),
                        ownAnswer = document.getElementById(ownAnswerId),
                        questionMade = document.getElementById(questionMadeId),
                        question = localStorage.getItem(questionId),
                        chosenAnswer = localStorage.getItem(answerId),
                        response = localStorage.getItem(responseId),
                        responseContainer = document.getElementById(response);
                    answersContainer.classList.remove("block");
                    answersContainer.classList.add("none");
                    questionMade.innerText = question;
                    ownAnswer.innerText = chosenAnswer;
                    questionMadeContainer.classList.remove("none");
                    questionMadeContainer.classList.add("block");
                    ownAnswerContainer.classList.remove("none");
                    ownAnswerContainer.classList.add("block");
                    responseContainer.classList.remove("none");
                    responseContainer.classList.add("block");
                }
            }
        }
    }
});

function submittedRadioQuestion (e) {
    const submitBtnId = e.id,
          questionContainerId = submitBtnId.replace("-submit", "-answers-container"),
          questionContainer = document.getElementById(questionContainerId),
          questionId = submitBtnId.replace("-submit", "-question"),
          question = document.getElementById(questionId),
          answersGroupId = submitBtnId.replace("-submit", ""),
          answersIds = document.getElementsByName(answersGroupId);
    let answered = "false";

    for (let i=0; i<answersIds.length; i++) {
        if (answersIds[i].checked) {
            let chosenAnswerId = `${answersGroupId}-a${i + 1}`;
            let chosenAnswer = document.getElementById(chosenAnswerId);
            let responseId = `${answersGroupId}-r${i + 1}`;
            let response = document.getElementById(responseId);
            questionContainer.classList.remove("block");
            questionContainer.classList.add("none");
            response.classList.remove("none");
            response.classList.add("block");
            answered = "true";
            if (localStorage) {
                localStorage.setItem(`${questionId}_question`, question.innerText);
                localStorage.setItem(`${questionId}_answer`, chosenAnswer.innerText);
                localStorage.setItem(`${questionId}_response`, responseId);
                localStorage.setItem(`${questionId}_isAnswered`, answered);
            }
            // It does not make sense to select more than one radio button
            break;
        }
    }
}