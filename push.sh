git add .

echo 'Enter the commit message:'

read commitMessage

git commit -m "$commitMessage"

echo 'Enter the name of the branch:'

read branch

git push origin $branch

echo 'Thank you for committing into your loved repo'

npm run build

git add dist -f

git commit -m "update gh page"

git subtree push -f --prefix dist origin gh-pages

echo 'Thank you for updating your loved page'

read
