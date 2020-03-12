const core = require('@actions/core');
const github = require('@actions/github');

try {

  const width = core.getInput('width');
  const length = core.getInput('length');
  let area = width*length;
  console.log(`the area of the rectangle is ${area}!`);
  core.setOutput("area", area);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
