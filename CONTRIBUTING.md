## Contributing

We take pull requests to add information to tags! Feel free to fork this repo, and add a pull request for any tag you would like.

If you are adding a new tag, note that we ask that the file name be all lower case.

All file headers must include a name, display name., and description in a comment block at the top (jeckyll style):

```
---
name: aspnet
displayName: ASP.NET
description: The .NET platform for making web based applications
---
```

Wiki content goes below this, and is optional for initial commits.

There is a simple utility for generating tag data in node. It is in the `generate.js` file. Replace the file name with a CSV file of your choice, and run node generate.
