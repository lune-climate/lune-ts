FROM debian:buster-20220125
RUN apt-get update && apt-get install -y \
    gnupg \
      software-properties-common \
      build-essential \
      wget \
      && rm -rf /var/lib/apt/lists/*

RUN wget -O- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN add-apt-repository "https://deb.nodesource.com/node_16.x buster main"
RUN apt-get update && apt-get install -y \
    nodejs=16.15.1-deb-1nodesource1 \
    && rm -rf /var/lib/apt/lists/*

# Why is this needed?
#
# In GH Actions the /lune-ts volume is mounted not under root but using a different
# user (UID 1001).
#
# This wouldn't be an issue if npm didn't have a very annoying behavior: if the
# current user is root (which it is in the container we run) but the current
# directory is owned by a different user npm run spawns subprocesses with the
# current directory owner being the process' UID. When that happens anything that
# tries to access /root (the home directory of the original user we're running
# as, the home directory of the current user is not modified by npm when spawning
# processes) will get the EACCES/13 error from the operating system.
#
# The aboe *still* wouldn't be an issue: npm 8.5.5 just logs a warning in this case
# and moves on. Unfortunately npm 8.11.1 which is bundled with Node 16.15.1 just dies and
# exits with code -13 (negative EACCES/13) without printing anything. -13 gets translated
# to code 243 somewhere along the way (-13 signed u8 is 243 unsigned, 256 - 13 = 243;
# I'm not up to speed regarding the range of exit codes, I imagine they're just
# limited to 8 bits unsigned (Jakub)).
#
# npm issues to keep track of:
#
# * https://github.com/npm/cli/issues/4996
# * https://github.com/npm/cli/issues/4838
# * https://github.com/npm/cli/issues/4769
#
# Let's downgrade npm for now. We could also switch to yarn which doesn't have the
# change-the-user-silently misfeature.
RUN npm install -g npm@8.5.5

WORKDIR /lune-ts
