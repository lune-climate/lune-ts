FROM debian:buster-20220125
RUN echo cachebuster
RUN apt-get update && apt-get install -y \
    gnupg \
      software-properties-common \
      build-essential \
      wget \
      strace \
      && rm -rf /var/lib/apt/lists/*

RUN wget -O- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN add-apt-repository "https://deb.nodesource.com/node_16.x buster main"
RUN apt-get update && apt-get install -y \
    nodejs=16.15.1-deb-1nodesource1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /lune-ts
