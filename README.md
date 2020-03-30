# Guess That Letter

This front-end app randomly picks a letter, and the user has to guess which letter the app chose! Choose each letter wisely as you only have seven chances to guess the right letter.

Access the live webapp: [Guess That Letter](https://maserallm.github.io/Psychic-Game/)

## Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [About the Developer](#aboutthedeveloper)

### Technologies

| Frontend          |
| ----------------- |
| Javascript 6      |
| CSS3              |
| Twitter Bootstrap |
| HTML5             |

---

### Installation

#### Prerequisites

You must have the following installed to run Guess that Letter:

- [Code Editor](https://www.elegantthemes.com/blog/resources/best-code-editors)
- [Twitter Bootstrap](https://getbootstrap.com/)

#### Run on your local computer

Clone or fork repository:

    $ git clone git@github.com:Nadia-Kadri/RCFit7.git

Create environment inside your root directory:

```
$ touch .env
```

Inside of .env file insert:

```
PASSPORT_SECRET=developer
```

You may change the word 'developer' to whatever you like. This word is used when encrypting and decrypting the user's password for Passport.js

Install dependencies:

```
$ npm install
```

<!-- Set your Google API restriction to your local IP address only and then add your Google Map API key into the moodMap.jsx file

    GoogleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YourAPIKey&libraries=places` -->

Run the app from the command line

```
$ npm start
```

---

### Features

Access the live webapp: [RC Fit 7](https://rcfit7-react-app.herokuapp.com/)

#### Login/Sign Up

Login / Sign-Up in order to sign-up for a class.

![Login/SignUp](https://media.giphy.com/media/LpiJu4eJ58FU3nhs9w/giphy.gif "Login / Sign Up")

#### Schedule Class

After sigining in user can select class from upcoming classes.

![Schedule Class](https://media.giphy.com/media/TEu9ggTRGAvW9t01LP/giphy.gif "Schedule Class")

#### Remove Classes

Registered users can also remove classes from their class list by clicking cancel.

![Remove Classes](https://media.giphy.com/media/elzF3iSl9hPJgKHIXI/giphy.gif "Remove Classes")

#### User Profile

When user signs up for class they can go to their profile and view their profile information and view the classes that they signed up for with the date, time, name of class and the trainer teaching the class.

![User Profile](https://media.giphy.com/media/YnNdsXf5rwqWbpM7aV/giphy.gif "User Profile")

<!-- #### Search Movies by Map

Utilizing the Google Maps API, users can move around the map and browse countries that have movies, indicated by a golden ticket. Users can click on the ticket and view a list of top movies. Users can view movie details by hovering over each movie.

![Movies by Map](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymoviebymap.gif "Movies by Map") -->

#### Admin Login

Admin has their own user login which gives them acces to their own profile page.

![Admin Login](https://media.giphy.com/media/H4zQN5KGhklzENooCO/giphy.gif "Admin Login")

#### Admin Creating Class

Admin can create classes.

![Admin Creating Class](https://media.giphy.com/media/d9BnTjOGElcrt4gpIS/giphy.gif "Admin Creating Class")

#### Admin Adding Trainer

Admin can add a trainer from the users that have been registered through using their email address to populate their names.

![Admin Adding Trainer](https://media.giphy.com/media/STwJgRLapNtTH9C8lk/giphy.gif "Admin Adding Trainer")

#### Admin Adding Trainer and Class to Schedule

Admin can assign a date, class, time, and trainer to the schedule for users to view.

![Admin Adding Trainer and Class to Schedule](https://media.giphy.com/media/Ribyw8bCqnVNbDgsmr/giphy.gif "Admin Adding Trainer and Class to Schedule")

### <a name="featuresforv2.0"></a> Features for V2.0

Future iterations of this project will include:

- Mobile interface for users.
- Users and trainers receiving notifications about upcoming classes they signed up for.
- Payment feature for users through [Stripe](https://stripe.com/docs) or [Square](https://developer.squareup.com/us/en) APIs.
- Share user classes to social media.

---

### <a name="aboutthedeveloper"></a> About the Developers

RC Fit 7 creators and designers:

[<img src="https://media-exp1.licdn.com/dms/image/C4D03AQH9bImUzEztVQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=8Q89ixVklNYqqmnkjXeBlcBBSphqYJct9FD0dVa22Jw" height="70px" width="70px">](https://github.com/Nadia-Kadri)<br>
[Nadia Kadri](https://github.com/Nadia-Kadri) is a Financial Analyst at Lockheed Martin pursuing a career in software engineering. She can be found on [LinkedIn](https://www.linkedin.com/in/nadia-kadri-334415b3/) and [Github](https://github.com/Nadia-Kadri).<br>

[<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFuF0ueWRw_tw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=nSqWVySUot2gTW_FialUtZQUlYNMp8WsDo7iQedVP50" height="70px" width="70px">](https://github.com/maserallm)<br>
[Maserall Marcelin](https://github.com/maserallm) is an Inventory Analyst at Publix Supermarkets, Inc. turned software developer. He can be found on [LinkedIn](https://www.linkedin.com/in/maserall-marcelin-76067a12b/) and [Github](https://github.com/maserallm).
