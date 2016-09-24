# AwesomeJobs Sails app using angular js + Sailsjs + etc

## Contents

A jobs board built with Node.js (Sails) + Angularjs for tutorials


###### Purpose

This repo will be the base for tutorials done in angular Node.js Stack

	Javascript/Node.js(Sails.js)


The course is not intended for complete begineers, it is for students that are familiar with the basics of web design and applications development, for this reason, we assume that the student is familiar(not expert) with HTML,CSS,jQuery,Bootstrap. A curated list of free resouces is provided for students who want to catch up on thses technologies. The  goal is to provide the student with a firm grasps of MVC/MVT patterns and work on a real world project that they can expand on.

The following technologies are used.

1. HTML

2. CSS (Bootstrap/Bootswatch specifically flatly v3.3.7 theme to overide default theme)

3. Angular 1.4.8

4. Font awesome 4.6.3

###### How to install

```
git clone https://github.com/bretuobay/angularSailsJobs.git
```

To run on localhost server check out this link :

 [Running Angular App]( http://stackoverflow.com/questions/29528922/how-to-create-a-localhost-server-to-run-an-angularjs-project).

 or run the following commands

```
 npm install -g http-server

 http-server -o

 ```
 Run the server side Sailsjs API by running
 ```
  cd server

  npm install

  sails lift

  ```


 To run angular front end test suite using protractor

 ```
 npm install -g protractor

 webdriver-manager update

 webdriver-manager start

 protractor conf.js

 ```
