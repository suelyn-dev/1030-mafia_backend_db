PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> npm init -y
Wrote to C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB\package.json:

{
  "name": "1030-backend_db",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}


PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> npm i express cors mysql2

added 77 packages, and audited 78 packages in 4s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> npm i -D nodemon

added 26 packages, and audited 104 packages in 3s

38 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git init
Initialized empty Git repository in C:/Users/suely/Desktop/FIAE 2026/Webentwicklung/1030 backend_DB/.git/
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add README.md
>> git commit -m "first commit"
>> git branch -M main
>> git remote add origin https://github.com/suelyn-dev/1030-mafia_backend_db.git
>> git push -u origin main
fatal: pathspec 'README.md' did not match any files
On branch main

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        index.js
        package-lock.json
        package.json

nothing added to commit but untracked files present (use "git add" to track)
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/suelyn-dev/1030-mafia_backend_db.git'
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git remote add origin git remote add origin https://github.com/suelyn-dev/1030-mafia_backend_db.git
usage: git remote add [<options>] <name> <url>

    -f, --[no-]fetch      fetch the remote branches
    --[no-]tags           import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --[no-]track <branch>
                          branch(es) to track
    -m, --[no-]master <branch>
                          master branch
    --[no-]mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from

PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add
Nothing specified, nothing added.
hint: Maybe you wanted to say 'git add .'?
hint: Disable this message with "git config set advice.addEmptyPathspec false"
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add .
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git commit -m 'Erster Commit'
[main (root-commit) bf4e81d] Erster Commit
 4 files changed, 1377 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 index.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git push
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git push -u origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 12.20 KiB | 1.74 MiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/suelyn-dev/1030-mafia_backend_db.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git branch  
* main
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git branch dev
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git branch
  dev
* main
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add .
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git commit -m 'Testcommit  main'
[main 44d2412] Testcommit  main
 2 files changed, 1 insertion(+)
 create mode 100644 README.md
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git switch dev
Switched to branch 'dev'
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git switch main
Switched to branch 'main'
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git switch dev 
Switched to branch 'dev'
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add .                       
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git commit -m 'import express'  
[dev 827051d] import express
 1 file changed, 1 insertion(+)
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git switch main               
Switched to branch 'main'
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git merge dev                 
Auto-merging index.js
CONFLICT (content): Merge conflict in index.js
Automatic merge failed; fix conflicts and then commit the result.
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   index.js

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add .
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   index.js

PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git commit -m "resolved merged conflict"
[main 49a46c2] resolved merged conflict
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> status
status : Die Benennung "status" wurde nicht als Name eines Cmdlet, einer Funktion, einer Skriptdatei oder eines ausführbaren Programms erkannt. Überprüfen Sie die Schreibweise des Namens, oder ob der Pfad korrekt ist 
(sofern enthalten), und wiederholen Sie den Vorgang.
In Zeile:1 Zeichen:1
+ status
+ ~~~~~~
    + CategoryInfo          : ObjectNotFound: (status:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git log --oneline
49a46c2 (HEAD -> main) resolved merged conflict
827051d (dev) import express
44d2412 Testcommit  main
bf4e81d (origin/main) Erster Commit
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git push
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (9/9), 849 bytes | 283.00 KiB/s, done.
Total 9 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), done.
To https://github.com/suelyn-dev/1030-mafia_backend_db.git
   bf4e81d..49a46c2  main -> main
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git log --oneline
49a46c2 (HEAD -> main, origin/main) resolved merged conflict
827051d (dev) import express
44d2412 Testcommit  main
bf4e81d Erster Commit
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git switch dev
Switched to branch 'dev'
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git merge main
Updating 827051d..49a46c2
Fast-forward
 README.md | 0
 index.js  | 2 +-
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 README.md
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git log --oneline
49a46c2 (HEAD -> dev, origin/main, main) resolved merged conflict
827051d import express
44d2412 Testcommit  main
bf4e81d Erster Commit
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> 

PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git add .                                       
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git commit -m "boilerplate and example.env"
[dev b7e086a] boilerplate and example.env
 3 files changed, 224 insertions(+)
 create mode 100644 .env.example
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git push -u origin main
branch 'main' set up to track 'origin/main'.
Everything up-to-date
PS C:\Users\suely\Desktop\FIAE 2026\Webentwicklung\1030 backend_DB> git push -u origin dev 
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 3.09 KiB | 1.54 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'dev' on GitHub by visiting:
remote:      https://github.com/suelyn-dev/1030-mafia_backend_db/pull/new/dev
remote: 
To https://github.com/suelyn-dev/1030-mafia_backend_db.git
 * [new branch]      dev -> dev
branch 'dev' set up to track 'origin/dev'


Standardkonfiguration Server:

import express from "express"

process.loadEnvFile(".env") //--> wegen Umgebungsvariable
const PORT = process.env.PORT || 8080 //Sicherheits-backup

const app = express() //damit ich meine express ANwenudng nutzen kann

app.use(cors()) //Middleware die sich um das PORT-Problem kümmert
app.use(express.json()) //Middleware die meine Daten richtig umwandelt



app.listen(PORT, () => console.log("Ein Mauzi erscheint in Port", PORT)) //Port starten