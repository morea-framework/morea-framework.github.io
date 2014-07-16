---
layout: userguide
title: Vagrant Quick Start
---

# Vagrant Quick Start

It can be problematic to set up Windows to use Jekyll; in fact the Jekyll developers do not officially support Windows as a platform.  This page documents a workaround for Windows users:  the use of [VirtualBox](https://www.virtualbox.org/) and [Vagrant](http://www.vagrantup.com/) to run a virtual Unix environment within Windows with Python, Ruby, git, and Jekyll pre-installed.

# Installation

### Install Git and GitHub

Follow the QuickStart directions to [set up Git and GitHub](/quickstart.html#SetupGitandGitHub). Be sure to join GitHub, install git, and set up your SSH keys for communication with GitHub. 

### Download and install VirtualBox

Download and install VirtualBox from the [VirtualBox downloads page](https://www.virtualbox.org/wiki/Downloads).

Note that you do not need to **run** VirtualBox, just **install** it. VirtualBox will be invoked and managed by Vagrant.

### Download and install Vagrant

Download and install Vagrant from the [Vagrant downloads page](http://www.vagrantup.com/downloads.html).

To verify that Vagrant is installed correctly, type `vagrant -v`. For example:

    % vagrant -v
      Vagrant 1.6.3
      
### Download the Morea Framework "box"

We have created a Vagrant "box" that contains a Unix environment with git, Python, Ruby, and Jekyll pre-installed.  Download this large (500 MB) file from [here](https://www.dropbox.com/s/996fbdwwahusryr/moreaframework.box). 

### Add the Morea Framework box to your Vagrant environment
 
In a shell window, cd to the directory containing the moreaframework.box file, and type the following:

    % vagrant box add moreaframework.box --name morea-framework/basic-box

This will copy the moreaframework.box file into your `~/.vagrant.d` directory and define a symbolic name for it that can be referred to in Vagrantfiles.  If you want to save space, you can delete the downloaded version of moreaframework.box once this command executes successfully.

# Set up local repository

### Create an empty repository

Follow the QuickStart instructions to [create an empty repository](/quickstart.html#Createanemptyrepository) in GitHub.

### Set up local development directory

Follow the QuickStart instructions to [set up a local development directory](/quickstart.html#Setuplocaldevelopmentdirectory).

### Download the Morea Framework Vagrantfile

Download this [Vagrantfile](https://raw.githubusercontent.com/morea-framework/vagrant/master/Vagrantfile) to your newly created local development directory. (Right-click on the displayed page and "Save as...")

# Run the virtual machine

### Bring up a virtual machine 

In a shell window, cd to your local development directory and type `vagrant up`. This command will process the contents of the Vagrantfile, which instructs Vagrant to use VirtualBox to begin running a virtual Unix environment whose image has been stored in the Morea Framework box. 

You should see output similar to the following:

{% highlight bash %}
[~/projecthosting/github/ics314f13]-> vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Importing base box 'morea-framework/basic-box'...
==> default: Matching MAC address for NAT networking...
==> default: Setting the name of the VM: ics314f13_default_1405467414419_16493
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 4000 => 4000 (adapter 1)
    default: 22 => 2222 (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
    default: The guest additions on this VM do not match the installed version of
    default: VirtualBox! In most cases this is fine, but in rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please make sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your host and reload your VM.
    default: 
    default: Guest Additions Version: 4.2.0
    default: VirtualBox Version: 4.3
==> default: Mounting shared folders...
    default: /vagrant => /Users/johnson/projecthosting/github/ics314f13
==> default: Running provisioner: shell...
    default: Running: inline script
==> default: stdin: is not a tty
==> default: Saving local git username to VM...
==> default: Running settings in .bash_profile
==> default: Running provisioner: shell...
    default: Running: inline script
==> default: stdin: is not a tty
==> default: Saving local git email to VM...
==> default: Running settings in .bash_profile
{% endhighlight %}

As the output shows, this command started up a virtual machine running Ubuntu Linux preconfigured with Morea Framework tools (Ruby, git, Jekyll, Python).  It copied your git user.name and user.email from your local settings, and set up its port 4000 to be available from your host machine. (That's so that you can use your local browser to see the local version of your site).

### ssh into the virtual machine

In your shell, type `vagrant ssh` to get into your newly instantiated virtual machine.  To convince yourself that the environment is already configured, you can run commands to find out the installed versions of git, ruby, python, and jekyll. Here's an example: 

{% highlight bash %}
[~/projecthosting/github/ics314f13]-> vagrant ssh
Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic-pae i686)

 * Documentation:  https://help.ubuntu.com/
Welcome to your Vagrant-built virtual machine.
Last login: Tue Jul 15 01:14:56 2014 from 10.0.2.2
Running settings in .bash_profile

vagrant@precise32:~$ git --version
git version 1.7.9.5

vagrant@precise32:~$ python --version
Python 2.7.3

vagrant@precise32:~$ ruby --version
ruby 2.0.0p481 (2014-05-08 revision 45883) [i686-linux]

vagrant@precise32:~$ jekyll --version
jekyll 2.1.1

{% endhighlight %}

### cd to /vagrant

Vagrant creates a mirror of your local directory structure starting from the directory where you invoked `vagrant up`. This mirror is available in the `/vagrant` directory.  So, cd to that directory and notice that it contains the same contents as your local directory:

{% highlight bash %}
vagrant@precise32:~$ cd /vagrant
vagrant@precise32:/vagrant$ ls 
Vagrantfile
{% endhighlight %}

### Run morea-vanilla-install

From within your virtual environment, follow the QuickStart instructions to [run morea-vanilla-install](/quickstart.html#Runmorea-vanilla-install). If you download the file using Windows, be sure to place it in your local development directory.  If you download the file using your virtual Unix environment, be sure you download it into the `/vagrant` directory (i.e. the mirror of your local development directory.)
 
# Continue with Quickstart

You can now follow the remainder of the QuickStart starting with [Develop course content](http://localhost:4000/quickstart.html#3.Developcoursecontent). 

Note that you can edit Morea files using a Windows editor if you prefer since the local directory is mirrored on the virtual machine.

# Miscellaneous Issues 

### Manage your Vagrant process

See the [Vagrant command line interface documentation](http://docs.vagrantup.com/v2/cli/index.html) for details.  You will be interested in `vagrant halt` if you don't want your virtual machine running all the time. You can always run `vagrant up` to get it back up again. 

### Caveats

#### The virtual host Jekyll does not "see" file updates from the local environment.

Unfortunately, if you edit Morea files with a Windows editor, the Jekyll process running in the virtual environment does not "notice" the changed file and thus does not re-process the files.  

**Workaround 1: force-polling.** One workaround for this is to edit your morea-run-local.sh script to add  `--force_polling` to the jekyll command:

{% highlight bash %}
#!/bin/bash

if [ ! -d "./master" ]; then
  echo "master/ directory does not exist.  Exiting..."
  exit 1
fi

DIR="$( cd "$( dirname "$0" )" && pwd )"

set -x
jekyll serve --source $DIR/master/src --destination $DIR/master/src/_site --baseurl "" --watch --force_polling
{% endhighlight %}

This tells Jekyll to automatically re-process the files every five seconds (regardless of whether files have changed or not). Not a perfect solution, but acceptable for the short term. 

**Workaround 2: touch a Morea file within Vagrant to trigger re-processing.**  If you don't want to re-process all of the files every 5 seconds, a different workaround is to open a second Vagrant shell and `touch` any Morea file when you want to regenerate the site. This works because the Jekyll process running inside Vagrant does notice file changes occurring inside the process. 

#### You can still run git commands within your local (Windows) environment

The use of VirtualBox and Vagrant is intended to overcome issues with the installation of Ruby and Jekyll on Windows. Specifically, it enables you to run the `morea-run-local.sh` command successfully.

If you prefer, you can use the `git-bash` environment within Windows to run the scripts that invoke git (i.e. `morea-pull`, `morea-vanilla-install.sh`). 













      
