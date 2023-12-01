FROM node:16.15.1

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

#
# The following addresses the issue explained in the comment above, which
# triggers the follow error:
#
# npm WARN logfile Error: EACCES: permission denied, scandir '/root/.npm/_logs'
# npm WARN logfile  error cleaning log files [Error: EACCES: permission denied, scandir '/root/.npm/_logs'] {
# npm WARN logfile   errno: -13,
# npm WARN logfile   code: 'EACCES',
# npm WARN logfile   syscall: 'scandir',
# npm WARN logfile   path: '/root/.npm/_logs'
# npm WARN logfile }
# 
# > @lune-climate/lune@2.15.1 build:ts
# > npm run build:ts:esm && npm run build:ts:cjs
# 
# npm ERR! code EACCES
# npm ERR! syscall mkdir
# npm ERR! path /root/.npm/_cacache/tmp
# npm ERR! errno -13
# npm ERR! 
# npm ERR! Your cache folder contains root-owned files, due to a bug in
# npm ERR! previous versions of npm which has since been addressed.
# npm ERR! 
# npm ERR! To permanently fix this problem, please run:
# npm ERR!   sudo chown -R 1001:127 "/root/.npm"
# 
# npm ERR! A complete log of this run can be found in:
# make: *** [Makefile:21: build] Error 243
#
RUN chmod -R o+x /root
RUN mkdir -p /root/.npm
RUN chmod -R 777 /root/.npm

WORKDIR /lune-ts
