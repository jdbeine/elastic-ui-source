
#!/bin/bash
#Teardown Heroku
repo_name=$1
echo 'Starting heroku server...'
heroku ps:restart --app $repo_name
