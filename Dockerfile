FROM node:16-alpine
WORKDIR /usr/src/app
COPY ./dist ./dist
COPY ./serve.json .
RUN npm add serve -g
EXPOSE 3000
CMD serve -s -p 3000 -c ../serve.json dist
