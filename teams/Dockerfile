FROM node:14.8.0-alpine As development

RUN mkdir -p /var/www/teams
WORKDIR /var/www/teams

RUN npm install -g npm@6.14.7

COPY . .
RUN npm install --only=development

CMD npm run build
