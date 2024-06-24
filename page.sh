npm run build

git add dist -f

git commit -m "update gh page"

git subtree push --prefix dist origin gh-pages

echo 'Thank you for updating your loved page'

read