FROM docker:26.0.0-cli

WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY script.sh .

RUN chmod +x script.sh

ENTRYPOINT ["./script.sh"]
