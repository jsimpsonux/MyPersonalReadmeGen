// function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license.replace(/ /g,'%20')}-blue.svg)

  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Question](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribute}

  ## Tests 
  ${data.tests}

  ## Questions
  If you have any questions, you can email me at ${data.email}.
  \n If you want to see more of my work at [${data.github}](https://github.com/${data.github})
`;
}

