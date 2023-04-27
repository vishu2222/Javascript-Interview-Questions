REF https://cs.fyi/guide/git-cheatsheet

### initialize a Repo

    - git init

### Add files to staging area

    - git add fileName

### Add all files

    - git add .

### Remove files to staging area

    - git rm --cached fileName

### Check which files are in staging area

    - git status

### move from staging area to local repo

    - git commit

    OR

    - git commit -m 'commit message'

### Push to remote repo

    - git push

### Pull changes from remote repo

    - git pull

### clone a remote repo

    - git clone

### Add your email and name to git

    - git config --global user.name 'ur name' user.email 'ur email'

### create a branch

    - git branch branch2

### show the current branch

    - git checkout

### change branch

    - git checkout branch2

### merge master to a branch

    - git merge branch

### Merge a branch into the current branch

    - git merge <branch_name>

### check remote repositore

    - git remote

### add a remote repository

    - git remote add origin 'https://github.com/.....example.git'

###

    - git push -u origin master

### Show differences between working tree and last commit

    - git diff

### Cancel merge in case of conflicts

    - git merge --abort

### Fetch from a remote repository

    - git fetch remote_name

### Pull changes from a remote branch

    - git pull remote_name remote_branch

### # Push changes to a remote repository

    - git push remote_name local_branch
