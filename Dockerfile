FROM quay.io/usermega/mega-ser:latest

RUN git clone https://github.com/crezykityboy/mega-md /root/mega-md
WORKDIR /root/mega-md/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
