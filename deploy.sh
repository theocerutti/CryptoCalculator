#!/bin/bash

pwd="XXX"
server="XXX"

npm run deploy # run build & deploy to github pages

# then publish it to my server
scp -r ./build/ ubuntu@$server:~/

echo $pwd | ssh ubuntu@$server << EOF
  sudo rm -r /var/www/crypto-calculator/*
  sudo cp -r ~/build/* /var/www/crypto-calculator/
  sudo systemctl reload apache2
EOF
