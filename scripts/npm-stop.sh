#!/bin/bash
cd /home/ubuntu/JourneyIntoTheBackend

trap 'stopServer' 1

stopServer()
{
    exit 0
}

##!pm2 stop server