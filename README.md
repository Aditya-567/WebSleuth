# 🛍️ WebSleuth
WebSleuth is a product Price tracker application for E-commerce Websites, currently working only for amazon 

## It Produces
<img align="left" src="https://cloud.githubusercontent.com/assets/532272/21507867/3376e9fe-cc4a-11e6-9350-7ec4f680da36.gif">
<br clear="left"/>
Just Kidding 😝

## 📊 Features
* Will show the highest, lowest and average price of the Product
* You can Opt-in to Track the product and will be notified when -
  * the product is in Stock
  * is below the current price
## 🛠️ Working and Technologies
* Cron jobs - For automated price tracking
* Nodemailer - For notifying the user through mail
* NextJS - FrameWork
* TypeScript - Programming Language
* React - Frontend
* Tailwind CSS - UI
* Cheerio - For Scraping the data
* BrightData - Web Unlocker, solves website blocking techniques in real-time
* MongoDb - Persistant Database



## ⚙️ Env Config that you need to have 
* Follow the .env.example format
* Clerk NextJS API keys (Public Key and Secret Key) for authentication
* Bright Data Web unlocker - Username and password
  *  Go to brightData -> Register
  *  Create a Web unlocker and copy the username and password
* Email and password
  *  Email can be changed here lib/nodemailer/index.ts
  *  And password need to be in env file
* MongoDB URI
# 🚀 QuickStart
Install all dependencies
```
npm run install
```
Build it
```
npm run build
```
Run it
```
npm run dev
```
or
```
npm run start
```
## 📐 Architecture
![image](https://github.com/Hexton09/WebSleuth-1/assets/98824774/2e56146d-9135-471a-8ea1-2315cdd4af4c)
## 🔧 Working
<p align="center">
  <img src="https://github.com/Hexton09/WebSleuth/assets/98824774/6f0fe796-3e2f-4a27-9665-41fbcd806d06" alt="Calculator Image">
</p>
