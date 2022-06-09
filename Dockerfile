FROM debian:buster-20220125
RUN apt-get update && apt-get install -y \
    gnupg \
      software-properties-common \
      build-essential \
      wget \
      && rm -rf /var/lib/apt/lists/*

RUN wget -O- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN add-apt-repository "https://deb.nodesource.com/node_16.x buster main"
# wgetting a specific file instead of installing through apt ensures that we can install
# older versions of the package even when new ones are published (apt install ... only sees
# the latest one).
RUN wget https://deb.nodesource.com/node_16.x/pool/main/n/nodejs/nodejs_16.15.0-deb-1nodesource1_amd64.deb && \
    dpkg -i nodejs*.deb && \
    rm nodejs*.deb
WORKDIR /lune-ts
