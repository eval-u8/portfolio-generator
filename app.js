const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// ----------------------------------------------------------------
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));


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



