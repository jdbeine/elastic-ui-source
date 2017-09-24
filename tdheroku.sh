
#!/bin/bash
#Teardown Heroku
repo_name=$1
echo 'Teardown heroku...'
heroku destroy $repo_name --confirm $repo_name
