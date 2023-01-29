FROM golang:1.17.7-alpine
RUN apk update && apk add git && go get -u github.com/gravityblast/fresh
WORKDIR /go/src

CMD ["fresh"]