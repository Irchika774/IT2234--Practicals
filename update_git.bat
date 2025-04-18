@echo off
cd C:\Users\Warushi\Desktop\VLE\2.2\IT2234--Practicals
git init
git remote add origin https://github.com/Irchika774/IT2234--Practicals.git
git pull origin master
git add .
git commit -m "First commit using batch file"
git push -u origin master
pause
