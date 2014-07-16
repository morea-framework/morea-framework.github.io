---
layout: userguide
title: Vagrant Quick Start
---

# Vagrant Quick Start

It can be problematic to set up Windows to use Jekyll; in fact the Jekyll developers do not officially support Windows as a platform.  This page documents an alternative approach for Windows users:  the use of [VirtualBox](https://www.virtualbox.org/) and [Vagrant](http://www.vagrantup.com/) to quickly set up a Unix environment.  

# Installation

### Install Git and GitHub

Follow the directions on the Quick Start page to [set up Git and GitHub](/quickstart.html#SetupGitandGitHub). Be sure to join GitHub, install git, and set up your SSH keys for communication with GitHub. 

### Download and install VirtualBox

Download and install VirtualBox from the [VirtualBox downloads page](https://www.virtualbox.org/wiki/Downloads).

Note that you do not need to **run** VirtualBox, just **install it**. VirtualBox will actually be run by Vagrant.

### Download and install Vagrant

Download and install Vagrant from the [Vagrant downloads page](http://www.vagrantup.com/downloads.html).

To verify that Vagrant is installed correctly, type:

    % vagrant -v
      Vagrant 1.6.3
      
### Download the Morea Framework "box"

We have created a Vagrant "box" that contains a Unix environment with git, Python, Ruby, and Jekyll pre-installed.  Download this large (500 MB) file from [here](https://www.dropbox.com/s/996fbdwwahusryr/moreaframework.box). 

### Add the Morea Framework box to your Vagrant environment
 
In a shell window, cd to the directory containing the moreaframework.box file, and type:

    % vagrant box add moreaframework.box --name morea-framework/basic-box

This will copy the moreaframework.box file into your ~/.vagrant.d directory and establish a symbolic name for it that can be used in Vagrantfiles.  If you want to save space, you can delete the downloaded version of moreaframework.box once this command executes successfully.

# Set up local repository

### Create an empty repository

Follow the [QuickStart instructions](/quickstart.html#Createanemptyrepository) to create an empty repository in GitHub.

### Set up local development directory

Follow the [QuickStart instructions](/quickstart.html#Setuplocaldevelopmentdirectory) to set up a local development directory.

### Download the Morea Framework Vagrantfile

Download this [Vagrantfile](https://raw.githubusercontent.com/morea-framework/vagrant/master/Vagrantfile) to your newly created local development directory.

# Run the virtual machine

### Bring up a virtual machine 

In a shell window, cd to your local development directory and type `vagrant up`. You should see output similar to the following:

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

This command started up a virtual machine running Ubuntu Linux preconfigured with Morea Framework tools (Ruby, git, Jekyll, Python).  It copied your git user.name and user.email from your local settings, and set up its port 4000 to be available from your host machine. (That's so that you can use your local browser to see the local version of your site).

Finally, it creates a "mirror" of the current directory in the `/vagrant` directory in the virtual machine. Let's check that out next.

### ssh into the virtual machine

In your shell, type `vagrant ssh` to get into your newly instantiated virtual machine.  To convince yourself that the environment is already configured, get the installed versions of git, ruby, python, and jekyll. Here's an example: 

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
vagrant@precise32:~$ 
{% endhighlight %}

### cd to /vagrant

Vagrant creates a mirror of your local directory structure starting from the directory where you invoked `vagrant up`. This mirror is available in the `/vagrant` directory.  So, cd to that directory and notice that it contains the same contents as your local directory:

{% highlight bash %}
vagrant@precise32:~$ cd /vagrant
vagrant@precise32:/vagrant$ ls 
Vagrantfile
{% endhighlight %}

### Run morea-vanilla-install

From within your virtual environment, follow the [Quickstart section to run morea-vanilla-install](/quickstart.html#Runmorea-vanilla-install). 

Make sure you are in the `/vagrant` directory when you do it. 

# Back to Quickstart

You can now follow the remainder of the QuickStart starting with [Develop course content](http://localhost:4000/quickstart.html#3.Developcoursecontent). 

Note that you can edit Morea files using a Windows editor if you prefer since the local directory is mirrored on the virtual machine.

# Miscellaneous Vagrant 

### Manage your Vagrant process

See the [Vagrant command line interface documentation](http://docs.vagrantup.com/v2/cli/index.html) for details.  You will be interested in `vagrant halt` if you don't want your virtual machine running all the time. You can always run `vagrant up` to get it back up again. 

### Caveats

#### The virtual host Jekyll does not "see" file updates from the local environment.

Unfortunately, if you edit Morea files with a Windows editor, the Jekyll process running in the virtual environment does not "notice" the changed file and thus does not re-process the files.  

The workaround for this is to edit your morea-run-local.sh script to add  `--force_polling` to the jekyll command:

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













      
