<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![LinkedIn][linkedin-shield]][linkedin-url]

 
<h3 align="center">Eat-Da-Burger: Sequelized</h3>
<p align="center">
This application uses Sequelize and MySQL to keep track of burgers that have been eaten.
<br />
<br />
<a href=" https://drive.google.com/file/d/1KAnbUqia4wWURy0AiWkc-LvggEZjpoud/view">View Demo</a>
·
<a href="https://github.com/celupanow/sequelizedBurger/issues">Report Bug</a>
·
<a href="https://github.com/celupanow/sequelizedBurger/issues">Request Feature</a>

</p>

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
	* [Built With](#built-with)
* [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

 
<!-- ABOUT THE PROJECT -->

## About The Project
![Eat-Da-Burger: Sequelized](./public/assets/img/eatdaburgersequelize-still-citadel.png "Eat-Da-Burger: Sequelized")

### Built With
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Handlebars](https://handlebarsjs.com/)
* [Node.js](https://nodejs.org)
* [MySQL](https://www.mysql.com/)
* [Express](https://expressjs.com/)
* [Sequelize]

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple steps.


### Prerequisites

You will need to have the lastest version of npm installed.
* npm
```sh
npm install npm@latest -g
```
You will also need MySQL installed. There is a schema file included with the basic sample data you see in the demo video. If you are using MySQL Workbench, you should be able to run this script and create the database.
  
### Installation

1. Clone the repo

```sh

git clone https://github.com/celupanow/sequelizedBurger.git

```
2. Install the NPM packages
```sh
npm install
```
3. Run the MySQL schema to create the database
4. Run the application using the command line
```sh
node bamazonCustomer.js
node bamazonManager.js
node bamazonSupervisor.js
```

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/sequelizedBurger/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact
Christina Lupanow - christina@christinalupanow.com
<p>
Project Link: [https://celupanow.github.io/sequelizedBurger/](https://celupanow.github.io/sequelizedBurger/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [GitHub Pages](https://pages.github.com)


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/sequelizedBurger.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/sequelizedBurger/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/sequelizedBurger.svg?style=flat-square

[forks-url]: https://github.com/celupanow/sequelizedBurger/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/sequelizedBurger.svg?style=flat-square

[stars-url]: https://github.com/celupanow/sequelizedBurger/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/sequelizedBurger.svg?style=flat-square

[issues-url]: https://github.com/celupanow/sequelizedBurger/issues

[license-shield]: https://img.shields.io/github/license/celupanow/sequelizedBurger.svg?style=flat-square

[license-url]: https://github.com/celupanow/sequelizedBurger/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png






# sequelizeBurger
Displays a list of burgers that have been eaten and burgers that have not been eaten. Burgers that have not been eaten can be devoured. The user can also add a burger to either list. Burgers that have been eaten can be deleted.

Working Link
[Deployed on Heroku](https://still-citadel-06884.herokuapp.com/)

## Objectives

 - Display a list of burgers that have not been eaten.
 - Include a button for those burgers to be devoured.
 - Display a list of burgers that have been eaten.
 - Include a button for those burgers to be deleted.
 - Have a form where a user can add a new burger to either list.
 
## How It Works
Uses MySQL database to keep track of the burgers and their devoured status. When the page loads, it lists them on the appropriate side, including the buttons for users to devour or delete. It has a form where the user can input their own burger, which is put into the SQL database.

## Technologies

 - HTML
 - CSS
 - Handlebars
 - MySQL
 - Node.js
 - Express
 - Sequelize
 - MVC
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MTI0NjYyMjksMTIwMzQ5ODcyOF19
-->