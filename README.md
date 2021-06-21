
# TPP-InfiniteScrolling

To implement infinite scrolling resembling that of Pinterest's. 

## Description

Challenge #1 - Infinite-Scroll

The challange is to implement infinite scroll feature. Given a static dataset (JSON) of Pinterest Pins, design and implement a page that shows all the pins and allows infinite scrolling, reusing the Pins as needed. The implementation should be done in a modular way so that the rendering of Pins could be easily reused in other pages and this page could be given other widgets to arrange on the page and support infinite scrolling.

Static data:
* [data-set]https://drive.google.com/file/d/1VHBpkiYaS-OqYBzL_ijhA-Etnb4HLtw7/view

For reference, Pinterest's site: 
* [Pinterest]https://www.pinterest.com/

The data set provides us with 41 "pins" but the task is to be able scroll infinitely with that limited number of pins. These pins are also retrieved at the rate of 10 pins per scroll. I opted to have my server serve up the data and not cache it on client's side because I wanted to practice my backend and it was a fun exercise. 

This project is build from scratch and not built on templates using create-react-app cli

Also, the components are not only modular at the "Pins" level, but also at individual "Pin" level, so that if you are to create a pin's page, you can do so directly. At the moment, the prop passed into "Pin" contains entire pin properties as well so that a pin page can render any information pertinent to that particular pin as you desire.

App styling includes vanilla CSS and mostly Material UI components and properties. 

## Getting Started#Set up Steps

* Fork the repository and clone it onto your local machine: 
[how-to-clone-repo]https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository 
* Run the following commands in the terminal:    
```
$ cd TTP-InfiniteScrolling     
```
```
$ code .
```
* Once you have your code editor open, $ npm install 

### Dependencies and Installing

* Foundational Dependencies include react, express, axios, react-dom and others. For full list of dependencies and dev dependencies, please clone the file and refer to it's package.json file in the root directory. 
* Once you "$ npm install", these dependencies and dev dependencies will be installed without you having to do so individually. 


### Executing program
* Run npm start (all commands and stripts are in package.json file under "scripts")
```
npm start
```
* Finally hit http://localhost:8080/


#This is how the the actual experience should feel and look like:




## Tech Stack
* Javascript
* React.js
* Node.js
* Express.js
* Material UI

## Authors

Name: Tenzin Jamyang
Email: jamyangu@gmail.com




## License

MIT license

## Acknowledgments
* Material UI official documentations were extremely helpful : 
[MUI resource]https://material-ui.com/
* If you are interested in exploring Pinterest API and other development related material: 
[Pinterest Developer] https://developers.pinterest.com/

