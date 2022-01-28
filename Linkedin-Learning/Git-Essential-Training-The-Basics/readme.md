# 10- Git Essential Training: The Basics

# GIT Configurations

```jsx
- git config                --> in project 
- git config --global
- git config --system 
- git config --global user.name
- git config --global user.email
- git config --list 
- git config --global core.editor  "Vscode " 
- git help 
- git help pull 

- Besides using git help cherry-pick, how might you view the
  information for the cherry-pick command on Linux? 
  : man git-cherry-pick

- What is the purpose of using git --version after Git's installation
  on a Windows system? 
 : The command outputs the current version of Git, confirming a successful installation.

```

# GIT Get Started

```jsx
- git init 
- ls -la          --> to show hidden files 
- ls -la .git     --> show the files unside .git file 
- cat .git/config --> show the content of config file 
- add 
- commit -m 

------------------------------------------------------------------

- git log 
- git log -n 1                --> limited with number 
- git log --since=19:15:05    --> Limited with time 
- git log --since=2021-09-25- --> Limited with date
- git log --until=2021-09-24- -->//     //      // 
- git log --author="Ahmed"    --> Limited with Author or User 
- git log --grep="commit"     --> Limited with regular expression we use to detect some 
                                  words or chars from commit message 

- Which will output the log for the last two commits that happened
  before September 10, 2020?
 : git log --until=2020-09-10 -n 2

- Which will output the log for all of Karen's commits labeled "refactor"
  during March 2019? 
 : git log --since=2019-03-01 --until=2019-03-31 --author="Karen" --grep="refactor" 

```

# Git Concepts and Architecture

```jsx
                           - **Three Trees** - 
1 - reposotiry 
2 - staging index
3 - workspace 

```

# Make Changes to File

```jsx
- git diff            --> to know more about any change in file and see the change 
                diff  --> compare working directory with stagging directory 

- git diff --staged   --> compare reposotiry directory with stagging directory
- git diff --staged    == git diff --cashed 
- git diff --color-words    --> show only the word changes 

- git rm file_to_delete1.txt    --> To delete a file and it will added to staging area 

- git mv first_file primarry_file  --> tename the file by mv and
                                       it will added to staging area 

-----------------------------------------------------------------------------------
- What is the difference between git diff and git diff --staged?
  git diff compares the changes to working directory files to the staging index,
  while git diff --staged compares staged files to the repository versions.

- How does committing an edited file affect the Git architecture's trees? 
  The commit moves the file from the staging index to the repository.

- In which situation should you use git diff? 
  to observe specific changes from the original version of a file

- 

```

# Use Git with a Real Project

```jsx
- git commit -a  == git comit  --all    --> we commit to repo directory without add
                                            to staging directory 

- git commit -am "Message "    ==   git commit -a -m "Message" 

- git show d990d464456                  --> view a commit 
- git show d990d464456  --color-words 

- git diff d990d4644..3b63bdc78cf1      --> compare commits 
- git diff d990d4644..3b63bdc78cf1 --color-words  

- git log --oneline   --> give you first line of commit message 
```

# Undo Changes

```jsx
                           - Undo working directory change - 

- git checkout -- fileName.extension 

                                  - Unstage files - 

- git reset HEAD fileName 

                                - Amend or edit the commit - 

- git commit --amend -m " Message"       --> edit final commit  

- git checkout  d990d464456      --> to return to this commit 
- git checkout master          --> to return to the master branch 

- git clean -f      --> remove unratcked files 

---------------------------------------------------------------------------------

- In what way does the commit history change when git revert is executed?
  HEAD points to a new revert commit that is a descendent of the previous HEAD.

- What is the difference between git reset HEAD header.c and git checkout -- header.c?
  git reset changes the staging index and git checkout changes the working directory.

- Which command will replace the staging directory version "footer.css"
  with the repository version?
  git reset HEAD footer.css

- What is the output for the final command if file1.c is staged and file2.c
  is untracked? git clean -f git reset HEAD -- file1.c git clean -n
  Output would be: Would remove file1.c

- 
```

# Ignore Files

```jsx
- to do that we create .gitignore file and add thefiles that we want to ignore 

- git rm --cached  fileName   -->   to ignore tracked files 

```

# Certificate

[CertificateOfCompletion_Git Essential Training The Basics.pdf](10-%20Git%20Essential%20Training%20The%20Basics%2008ddee82c3134b148621ec71d6a5e237/CertificateOfCompletion_Git_Essential_Training_The_Basics.pdf)
