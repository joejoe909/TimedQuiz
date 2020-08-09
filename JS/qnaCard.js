var qnaCard = {
    question: "text",
    correctanswer: "text",
    incorrectanswer1: "text",
    incorrectanswer2: "text",
    incorrectanswer3: "text",

    setQuestion: function (text) {
        question = text;
    },

    getQuestion: function () {
        return question;
    },

    setCorrectAnswer: function (text) {
        correctanswer = text;
    },

    getCorrectAnswer: function (text) {
        return correctanswer;
    },

    setIncorrectAnswer1: function (text) {
        incorrectanswer1 = text;
    },

    getIncorrectAnswer1: function (text) {
        return incorrectanswer1;
    },

    setIncorrectAnswer2: function (text) {
        incorrectanswer2 = text;
    },

    getIncorrectAnswer2: function (text) {
        return incorrectanswer2;
    },

    setIncorrectAnswer3: function (text) {
        incorrectanswer3 = text;
    },

    getIncorrectAnswer3: function (text) {
        return incorrectanswer3;
    }

};