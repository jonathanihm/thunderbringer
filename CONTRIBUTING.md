# Contributor's Guide

It's easy to become a contributor!  Simply create a topic branch off of our staging branch and get to work!  Okay, I really oversimplified that.  If you need help with git, I would suggest https://git-scm.com/book/en/v2

# Prerequisites

Git and Node

# Summary 

Basically you want to fork the Thunderbringer repository into your account.  This becomes your copy of the repository, also known as your origin repository.  When you want updates from the main repository, you will want to merge them from our copy, the upstream repository (this is usually done before any remote actions).  When you are done with your changes, you will want to open a pull request and select your topic branch and request to merge it with our staging branch.

1. Fork 'dat repo!  On our main page, https://github.com/jonathanihm/thunderbringer, click the 'Fork' button on the upper right.

2. Clone 'dat repo!  You can use either the git command line or whatever Git GUI you like!  Personally, I use SourceTree.  Here's a quick run down of what to do on your command line.

```shell
C:\Users\Thor>mkdir \workspace
C:\Users\Thor>cd \workspace
C:\workspace\>git clone https://github.com/yourUsername/thunderbringer.git
```

3. Add 'dat upstream!  

```shell
C:\workspace\>cd thunderbringer
C:\workspace\thunderbringer>git remote add upstream https://github.com/jonathanihm/thunderbringer.git
```

4. Create 'dat branch!  Now you get a branch of your very own to store your changes.  When you're done, you will commit all of your changes to your origin repo.  If it's a larger change, you will probably want to commit more than once and then squash your commits!  Here we will create a topic branch and then immediately add it to your forked repository.

```shell
C:\workspace\thunderbringer>git checkout -b fix/fix-branch-name
C:\workspace\thunderbringer>git push origin fix/fix-branch-name
```

5. Bring da' thunder!  Follow the setup guide (pretty much just running npm install) and make your changes!

6. Commit and open a pull request!
