#!/bin/bash

cd server 
npx nodemon server.js & 
cd ../admin 
npm start & 
cd .. 
npm start