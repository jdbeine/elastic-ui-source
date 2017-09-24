
#!/bin/bash
#Teardown Heroku
repo_name=$1
echo 'Starting remote BASH session on heroku...'
heroku run bash --app $repo_name
