
#!/bin/bash
#Teardown Heroku
repo_name=$1
echo 'Restarting heroku server...'
heroku ps:restart --app $repo_name
