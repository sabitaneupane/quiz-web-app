# Use a lighter version of Node as a parent image 
FROM node:10.15.0
# ARG for 'APP_PORT' build-time variables.
ARG APP_PORT
# Set the working directory to /app 
WORKDIR /app
# copy package.json into the container at / 
COPY package.json ./
# copy yarn.lock into the container at / 
COPY yarn.lock ./
# install dependencies 
RUN yarn install
# Copy the current directory contents into the container at / 
COPY . ./
# Make port 'APP_PORT' available to the world outside this container 
EXPOSE $APP_PORT
# Run the app when the container launches 
CMD ["yarn", "start"]
