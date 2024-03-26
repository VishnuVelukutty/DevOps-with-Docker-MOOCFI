FROM docker:26.0.0-cli

WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY dockerize.sh dockerize.sh

RUN chmod +x dockerize.sh

ENTRYPOINT ["./dockerize.sh"]

readme https://github.com/maxmynter/devopsDocker/blob/main/part3/ex3.4/dockerize.sh