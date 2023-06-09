// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## License
  ${data.license}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions  
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  ### Reach me here: 
  ${data.github} 
  ${data.email}`;
}

module.exports = generateMarkdown;
