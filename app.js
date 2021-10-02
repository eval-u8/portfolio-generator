const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// ----------------------------------------------------------------
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username",
            validate: (ghuserInput) => {
                if (ghuserInput) {
                    return true;
                } else {
                    console.log("Please enter your username.");
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:",
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ]);
};


const promptProject = portfolioData  => {
    console.log(`
=================
Add a New Project
=================
`);
// If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
};
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your project?",
                validate: (projectnInput) => {
                    if (projectnInput) {
                        return true;
                    } else {
                        console.log("Please enter the name of your project.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "description",
                message: "Provide a description of the project (Required)",
                validate: (projectdInput) => {
                    if (projectdInput) {
                        return true;
                    } else {
                        console.log(
                            "Please enter a proper description for your project."
                        );
                        return false;
                    }
                },
            },
            {
                type: "checkbox",
                name: "languages",
                message:
                    "What did you build this project with? (Check all that apply)",
                choices: [
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "ES6",
                    "jQuery",
                    "Bootstrap",
                    "Node",
                ],
            },
            {
                type: "input",
                name: "link",
                message: "Enter the GitHub link to your project. (Required)",
                validate: (projectlInput) => {
                    if (projectlInput) {
                        return true;
                    } else {
                        console.log(
                            "Please enter a the link for your project."
                        );
                        return false;
                    }
                },
            },
            {
                type: "confirm",
                name: "feature",
                message: "Would you like to feature this project?",
                default: false,
            },
            {
                type: "confirm",
                name: "confirmAddProject",
                message: "Would you like to enter another project?",
                default: false,
            },
        ])
        .then((projectData) => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptUser().then(promptProject).then(portfolioData => console.log(portfolioData));


// ----------------------------------------------------------------

// const pageHTML = generatePage(name, github);

// const profileDataArgs = process.argv.slice(2);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// const [name, github] = profileDataArgs;

// console.log(profileDataArgs);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = (profileDataArr) => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("================");

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// ------------------------------------------------------------------------------

// const generatePage = () => 'Name: Jane, Github: janehub';

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}.`;

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err; //this creates an exception and stops the execution of the code. && any statements after `throw` won't be executed and control will be passed to the first `catch` block in the call. if theres no `catch` the program will terminate

//     console.log('Portfolio complete! Check out index.html to see the output');
// });



