#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t\tPROGRAMMING LANGUAGE QUIZ");
const programmingLanguageQuizz = {
    HTML: [
        {
            question: "What does HTML stands for?",
            options: [
                "Hypertext Markup Language",
                "Hyperlink and Text Markup Language",
                "Home Tool Markup Language",
            ],
            correctAnswer: "Hypertext Markup Language",
        },
        {
            question: "What is the correct HTML element for the largest heading?",
            options: ["<h1>", "<heading>", "<h6>", "<h>"],
            correctAnswer: "<h1>",
        },
        {
            question: "Which attribute specifies the URL of the page the link goes to?",
            options: ["href", "src", "link", "url"],
            correctAnswer: "href",
        },
        {
            question: "What does the <a>  element define?",
            options: ["Anchor", "Image", "Paragraph", "Link"],
            correctAnswer: "Link",
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: ["style", "class", "font", "color"],
            correctAnswer: "style",
        },
        {
            question: "How can you make a number list?",
            options: ["<ul>", "<ol>", "<list>", "<li>"],
            correctAnswer: "<ol>",
        },
        {
            question: "What is the correct HTML for adding a backgroud color?",
            options: ["<background>", "<color>", "<bgcolor>", "<bodycolor"],
            correctAnswer: "<bgcolor>",
        },
        {
            question: "Which HTML element is used to define important text?",
            options: ["<important>", "<bold>", "<strong>", "<emphasis>"],
            correctAnswer: "<strong>",
        },
    ],
    CSS: [
        {
            question: "What does CSS stands for?",
            options: [
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets",
                "Computer Style Sheets",
            ],
            correctAnswer: "Cascading Style Sheets",
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["color", "text-color", "font-color", "bgcolor"],
            correctAnswer: "color",
        },
        {
            question: "Which CSS property is used to change the background color of an elemant?",
            options: ["bgcolor", "background-color", "color", "text-color"],
            correctAnswer: "background-color",
        },
        {
            question: "Which CSS property is used to change the font size of an element?",
            options: ["size", "font-size", "text-size", "font-style"],
            correctAnswer: "font-size",
        },
        {
            question: "Which CSS property is used to change the font style of an elemen?",
            options: ["style", "font-size", "text-size", "font-family"],
            correctAnswer: "font-style",
        },
        {
            question: "Which CSS property is used to change the left margin of an element?",
            options: ["margin", "margin-left", "left-margin", "padding-left"],
            correctAnswer: "margin-left",
        },
        {
            question: "Which CSS property is used to change the right margin of an element?",
            options: ["margin-right", "right-margin", "margin", "padding-margin"],
            correctAnswer: "margin-right",
        },
        {
            question: "Which CSS property is used to change the top margin of an element?",
            options: ["margin-top", "top-margin", "margin", "padding-top"],
            correctAnswer: "margin-top",
        },
        {
            question: "Which CSS prperty is used to change the text alignment of an element?",
            options: ["align", "text-align", "alignment", "text-style"],
            correctAnswer: "text-align",
        },
        {
            question: "What does CSS define?",
            options: [
                "Style presentation of HTML elements",
                "Behavior of HTML elements",
                "Data storage of HTML elements",
                "Interactivity of HTML elements",
            ],
            correctAnswer: "Style presentation of HTML elements",
        },
    ],
    TypeScript: [
        {
            question: "What is TypeScript?",
            options: [
                "A programming language",
                "A markup language",
                "A scripting language",
                "A style sheet language",
            ],
            correctAnswer: "A programming language",
        },
        {
            question: "Which keyword is used to define a variable in TypeScript?",
            options: ["let", "const", "var", "type"],
            correctAnswer: "let",
        },
        {
            question: "What is the purpose of TypeScript?",
            options: [
                "To enhance JavaScript",
                "To replace JavaScript",
                "To compete JavaScript",
                "To simplify JavaScript",
            ],
            correctAnswer: "To enhance JavaScripr",
        },
        {
            question: "Which keyword is used to define a function in TypeScript?",
            options: ["func", "function", "def", "define"],
            correctAnswer: "function",
        },
        {
            question: "What does TypeScript add to JavaScript?",
            options: ["Type annotations", "Comments", "Keywords", "HTML tags"],
            correctAnswer: "Type annotations",
        },
        {
            question: "What tool is used to compile TypeScript code to JavaScript?",
            options: ["tsc", "tslint", "tsconfig", "typescript"],
            correctAnswer: "tsc",
        },
        {
            question: "What is the file extension for TypeScript files?",
            options: [".ts", ".js", ".css", ".html"],
            correctAnswer: ".ts",
        },
        {
            question: "what does TypeScript support that JavaScript does not?",
            options: [
                "Static typing",
                "Dynamic typing",
                "Loose typing",
                "Weak typing",
            ],
            correctAnswer: "Static typing",
        },
        {
            question: "Which feature of TypeScript hepls in catching errors during development?",
            options: [
                "Type checking",
                "Syntax highlighting",
                "Code folding",
                "Debugging",
            ],
            correctAnswer: "Type checking",
        },
        {
            question: "What does TypeScript compile down to?",
            options: ["JavaScript", "HTML", "CSS", "Python"],
            correctAnswer: "JavaScript",
        },
    ],
    Python: [
        {
            question: "What is Python?",
            options: [
                "A programming language",
                "A markup language",
                "A scripting language",
                "A style sheet language",
            ],
            correctAnswer: "A programming languae",
        },
        {
            question: "Which keyword is used to define a variable in Python?",
            options: ["let", "const", "var", "type"],
            correctAnswer: "var",
        },
        {
            question: "What is the purpose of Python?",
            options: [
                "General-purpose programming",
                "Web development",
                "Data science",
                "Game development",
            ],
            correctAnswer: "General-purpose programming",
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "fuction", "def", "define"],
            correctAnswer: "def",
        },
        {
            question: "What is the file extension for Python files?",
            options: [".py", ".css", ".html", ".js"],
            correctAnswer: ".py",
        },
        {
            question: "Which feature of Python helps in catching errors during development?",
            options: [
                "Exception handling",
                "Syntax highlighting",
                "Code folding",
                "Debugging",
            ],
            correctAnswer: "Exception handling",
        },
        {
            question: "Which tool is used to run Python code?",
            options: [
                "Python interpreter",
                "JavaScript interpreter",
                "Node.js",
                "Python compiler",
            ],
            correctAnswer: "Python interpreter",
        },
        {
            question: "What is the Python standard library?",
            options: [
                "A collection of modules",
                "A compiler",
                "An IDE",
                "A framework",
            ],
            correctAnswer: "A collection of modules",
        },
        {
            question: "Which framework is used for web development in Python?",
            options: ["Django", "React", "Angular", "Vue.js"],
            correctAnswer: "Django",
        },
        {
            question: "What is the syntax for a single-line comment in Python?",
            options: ["# Comment", "// Comment", "<!-- Comment -->", "/* Comment */"],
            correctAnswer: "# Comment",
        },
    ],
};
async function chooseProgrammingLanguage() {
    const { language } = await inquirer.prompt([
        {
            type: "list",
            name: "language",
            message: "Choose a programming language:",
            choices: Object.keys(programmingLanguageQuizz),
        },
    ]);
    return language;
}
async function startProgrammingLanguageQuiz(languae) {
    const questions = programmingLanguageQuizz[languae];
    if (!questions) {
        console.log("Invalid programming language.");
        return;
    }
    let score = 0;
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "answer",
                message: question.question,
                choices: question.options,
            },
        ]);
        if (answer.answer === question.correctAnswer) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log("Incorrect!");
            console.log(`Correct answer is: ${question.correctAnswer}`);
        }
    }
    console.log(`Quiz completed! Your score: ${score} out of ${questions.length}`);
}
async function main() {
    const selectedLanguage = await chooseProgrammingLanguage();
    await startProgrammingLanguageQuiz(selectedLanguage);
}
main();
