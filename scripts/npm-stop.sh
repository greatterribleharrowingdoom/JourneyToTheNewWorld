#!/bin/bash
cd /home/ubuntu/JourneyIntoTheBackend

trap 'stopServer' 1

stopServer()
{
    #This means the server is already stopped
    exit 0
}

pm2 stop server.js