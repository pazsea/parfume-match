<p align="center">
<a href="http://gjtp.surge.sh/" >
<img src="/src/images/sniphlogo.png" alt="team GJTP" width="350"/>
</a>
</p>

## 🚩 Project Goal

GJTP is an collection of awesome front end developers. We collaborated with an company called Sniph whos business revolves parfumes. They wanted ways of improving their customer experience by having them stay longer on their site.

This project works towards that goal. 

  <a href="http://gjtp.surge.sh/" target="_blank">
    Live demo.
  </a>


## What’s In This Document

- [Key functions](#-key-functions)
- [How to run this project](#-how-to-run-this-project)
- [Attributes](#-attributes)
- [Authors](#-authors)



## 🔔 Key Functions

- **Create, login, reset/change password** All these features exists using firebase. You can also upload your own profile picture.

- **Wardrobe Component** The user gets prompted to answer a short quiz after creating an user. This will generate an recommended parfume collection for the user to subsribe to. Using redux, saga, node.js and an SQL database we fetch data and sort the parfumes to the respective collection. The user gets the correct render from the collection in which she/he has selected.

- **Rating function** Every parfume is avaible for the user to rate from 1 - 5 stars. When the user rates an parfume she/he also rates the containing notes. We have created and function that calculates the users top 5 notes.

- **Matching function** With the rating function that calculates the users top 5 notes, we also have an function that calculates which users have the most in common with the logged in user. 

- **Explore Component** We render all matching users that gets returned from the matching function with its respective wardrobes. So the logged in user can explore new parfumes.

- **Redux persist** We also use an library for persisting state on local storage. Our SQL database is static so this doesnt need to fetch all the time. Instead we fetch it once and store it on the users local storage.



## 💻 How to run this project
1. **Install from the root folder, GJTP**

   ```shell
   npm install

   ```

2. **Run the app**

   Now you are ready to run the app from the root folder GJTP

   ```sh
   npm start
   ```
The node.js server code is in the server folder but it is hosted on heroku also. But if you are interested you can run the node js server locally from there.
 
   
## 👏 Attributes
<a href="https://www.robinwieruch.de/">https://www.robinwieruch.de/</a> Big thanks to Robin for his toturials about Readux, React, Saga. Always an big help. Supported us student with his books for free which was greatly appreciated. <br>


## 📓 Authors
Patrick Sjöberg <a href="https://github.com/pazsea">@pazsea</a> 

