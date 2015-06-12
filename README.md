#TotesPaint
A paint clone using native Canvas, usable in modern browsers or and a standalone application.

##Setup
1. Ensure that this repository is in a directory called 'TotesPaint'
1. Install NodeJS - https://nodejs.org/download/
1. Install Grunt - http://gruntjs.com/getting-started
1. Run 'npm install' in a Node JS command prompt in the root project folder
1. Download the NWJS .zip file (http://nwjs.io/) and extract to '../NWJS/' from the project root. For example, if your project is at D:\Projects\TotesPaint\, extract the zip to D:\Projects\NWJS\

##Running the application

###Test the application
1. Ensure initial setup is done
1. Run 'grunt test'. The debugging toolbar is enabled when running a test.

###Build the application executable
1. Ensure initial setup is done
1. Run 'grunt build' (first run will take a long time). The debugging toolbar is disabled when running a test.
1. Output files are written to builds/TotesPaint/win64/

##Other

###Documentation
* https://github.com/nwjs/nw.js