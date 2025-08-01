FROM node:24.4.1

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
