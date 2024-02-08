FROM nodered/node-red

# Copy package.json to the WORKDIR so npm builds all
# of your added nodes modules for Node-RED
COPY node-red/package.json .
RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production

# Copy _your_ Node-RED project files into place
# NOTE: This will only work if you DO NOT later mount /data as an external volume.
#       If you need to use an external volume for persistence then
#       copy your settings and flows files to that volume instead.
COPY node-red/settings.js /data/settings.js
COPY flows_cred.json /data/flows_cred.json
# COPY flows.json /data/flows.json

# COPY complete flow directory generated by the storage plugin:
# https://flows.nodered.org/node/node-red-contrib-js-storage
COPY ./node-red/flows_js /data/flows_js

USER root

# Copy project files and folders to the current working directory
COPY vue /app

# Install project dependencies
RUN cd /app && npm install

# Build app for production with minification
RUN cd /app && npm run build

# install project dependencies
RUN cd /app/express && npm install

# Build express server
RUN cd /app/express && npm ci --only=production

USER node-red

# Copy entrypoint script
COPY entrypoint.sh .