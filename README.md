# Visual Regression

Backstopjs is a visual regression testing tool for performing front-end or user-interface (UI) regression tests.

It does this by capturing the screenshots of web pages and comparing them against an original baseline. If the new screenshot deviate from the baseline or reference screenshot, it will warn you. This is very useful for capturing CSS changes that might have affected unintended parts of your site.

Backstopjs wraps CasperJS, PhantomJS and ResembleJS in an easy-to-configure test matrix across multiple URLs, DOM elements and screen sizes. It is important to note that screenshot based visual regression testing can only work when UI behaviour is predictable. Mutable UI components should be normally excluded from visual regression.

Visual Regression testing is also DevOps friendly and can be used with your existing continuous integration and delivery setup. As part of the process, screenshots can be checked into your version controlled repository. This enables visual review of the UI changes as part of your existing code review process.


## Installation

### Step 1
Firstly, you will need to install Backstopjs on your machine. Assuming you have npm installed, run the following command:

`npm install -g Backstopjs`

This will install Backstopjs and its dependencies globally on your machine.

If permission issues popup, `sudo` is your friend.


### Step 2
To setup a Backstopjs instance (the place you'll run and store all your tests), `cd` to a path and `mkdir` a folder of your choice.

### Step 3 (optional)
To create your own Backstopjs configurables, inside the previously created folder run:

`backstop init`

This command will create a backstop.js file and related folders. You can then modify the backstop.js file according to your specific requirements.

### Step 2
After cloning, cd into folder and run a set of commands below.  

#### 1st set, using default host
The following commands allow you to use the default test [http://localhost:8080] host in the backstop-settings.js file.

`backstop reference --configPath=backstop-settings.js`

`backstop test --configPath=backstop-settings.js`

#### 2nd set, Specifying hosts
The following commands allow you to specify your own test and reference host.

`backstop reference --configPath=backstop-settings.js --refhost=http://localhost:8080`

`backstop test --configPath=backstop-settings.js --testhost=http://www.houseoffraser.co.uk/`

Using the 2nd set of commands, you can specific different environments without having to modify the backstop-settings.js file. For other settings such as removing tags with certain classes, then you will need to modify the file.

#### Checking Your Report
You are automatically notified of any failure/success in terminal.
To see a visual representation of this you'll need to navigate to the following folder:

`[root]/backstop_data/html_report`

and open the index.html file.

### Step 6
Assuming all regressions are as expected, or you've reached a consensus, you can accept them with the following command:

`backstop approve`


## Useful links
To avoid data redundancy, I've avoided adding certain commands in this doc. Instead, please refer to the github read.me of Backstopjs for a more detailed explanation.

That’s all folks!
