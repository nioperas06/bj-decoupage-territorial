FROM node:14-slim

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node package*.json ./

# Install the good ol' NPM modules and get Adonis CLI in the game
RUN npm install

# Bundle app source code
COPY --chown=node . .

# Let all incoming connections use the port below
EXPOSE 3333

CMD node ace serve --watch

#ENTRYPOINT ["node","ace","serve","--watch"]