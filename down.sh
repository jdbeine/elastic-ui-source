
#!/bin/bash
#Teardown Heroku
repo_name=$1
echo 'Shutting down heroku server...'
heroku ps:stop DYNO --app $repo_name
