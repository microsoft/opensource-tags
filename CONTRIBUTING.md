## Contributing

We take pull requests to add information to tags! Feel free to fork this repo, and add a pull for any tag you would like.


### Tags

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

There is a simple utility for generating tag data in node. It is in the generate.js file. Replace the file name with a CSV file of your choice, and run node generate.


### Legal

You will need to complete a Contributor License Agreement (CLA) before your pull
request can be accepted. This agreement testifies that you are granting us
permission to use the source code you are submitting, and that this work is
being submitted under appropriate license that we can use it.

You can complete the CLA by going through the steps at
https://cla.microsoft.com. Alternatively, download the agreement
([Microsoft Contribution License Agreement.pdf](https://opensource.microsoft.com/pdf/microsoft-contribution-license-agreement.pdf)),
sign, scan, and email it back to <cla@microsoft.com>. Be sure to include your
GitHub username along with the agreement. Once we have received the signed CLA,
 we'll review the request. You will only need to do this once.
