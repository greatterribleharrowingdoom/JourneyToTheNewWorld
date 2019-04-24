#!/bin/bash
cd /home/ubuntu/JourneyIntoTheBackend

trap 'startServer' 1

startServer()
{
    #this means that the server is already started
    exit 0
}

pm2 start server.js