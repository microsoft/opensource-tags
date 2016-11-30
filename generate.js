//automatically generates a markdown file for each row in a CSV
//CSV headers must be name, displayName, description
//an optional fourth column of content is allowed
//for now, all of these fields must be plain strings

const fs = require('fs');
const csv = require('csv-parser');
const filename = './result.csv'; //put your file here

fs.createReadStream(filename)
  .pipe(csv())
  .on('data', function (data) {
    const markdown = `---\nname: ${data.name}\ndisplayName: ${data.displayName}\ndescription: ${data.description}\n---\n${data.content || data.description}`;
    fs.writeFile(`tags/${data.name}.md`, markdown);
  });
