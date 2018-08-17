# backend-airbnb-clone-app
This is the backend for the Airbnb react native mobile app clone which you can find [here](https://github.com/imandyie/react-native-airbnb-clone)

## Docker commands
- `docker images` - Lists all Docker images
- `docker container ls` - Lists all Docker containers
- `docker rmi <image id>` - Removes a Docker image
- `docker container stop <container id>` - Stops a Docker container
- `docker exec -it <container id> mongo` - Starts a mongodb shell in docker container if container is already running
- `docker run -it -p 28000:27017 --name <container name> mongo:latest mongo` - Starts a mongodb shell in a docker container if container is not already running
- `docker-compose up` - Runs the docker-compose.yml file and starts all containers
- `docker build .` - Builds a Docker image
