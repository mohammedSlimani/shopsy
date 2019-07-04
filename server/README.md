# Server 
## Start your mongo service
assuming you have mongod installed, in your terminal run 
```
sudo mongod
```
this terminal is going to have logs about your mongod service.If everything works right you should see at the end  
`waiting for connections on port 27017`  
Dont terminate the service.

## Running the server
now make sure you are in the directory of the server and then run 
```
node server.js
```

## PS
- The front end is using the Hosted version of the server which has some imported data.  
- If you want to import that data then you can download the `.bson` file of the shops from [here](https://github.com/hiddenfounders/web-coding-challenge/blob/master/dump-shops.zip)  
then extract the file and then cd to its directory and run: (you might need to install mongostore)
```
mongorestore -d united -c shops shops.bson
```
