// Badge appears based on license choice
function licenseBadge(license) {
  console.log(license);
  if (license == 'MIT'){ 
   return `
   [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)`
  }
  if (license == 'Markdown') {
    return `[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)`
  }
  if (license == 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license == 'VSCode') {
    return `[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)`
  }
  else 
  { return ('');
  }
};

// Choose a license to add to the README
function licenseSection(licenseSec) {
  if (licenseSec === ''){
    return 
  }
  return licenseSec.map((item) => {
    return `
  * ${item}
  `
  }).join('');
};

// Function to show TOC table items
function showToc(data){
  if (data.contents === ''){
    return
  }
  return data.map((item) => {
    return`
  * [${item}](#${item})
    
  `
  }).join('');
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents
  ${showToc(data.contents)}

  ## Badge:
  ${licenseBadge(data.license)}

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  ${licenseSection(data.license)}

  ## Questions:
  ${data.questionsGitHub}: https://github.com/${data.questionsGitHub}
  ### For any questions you can reach me at me email address below:
  ${data.questionsEmail}
`;
}
module.exports = generateMarkdown;
