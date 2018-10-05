#!/bin/bash

git push heroku master

if [[ $? -gt 0 ]]; then
  echo "Failed to run 'git push heroku master'. Have you tried using \"heroku login\"? Is the remote set properly?"
fi
