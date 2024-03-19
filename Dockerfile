# build stage
FROM gradle:8.6-jdk17-alpine as build-stage
RUN mkdir -p /usr/src/public
WORKDIR /usr/src
COPY . .
RUN gradle build

# production
FROM eclipse-temurin:17-alpine as production
ENV PUBLIC_HOME=/usr/src/app/public
ENV JAR_HOME=/usr/src/app/build/libs/server.jar

WORKDIR /usr/app

COPY --from=build-stage $JAR_HOME .
COPY --from=build-stage $PUBLIC_HOME ./public

EXPOSE 8000
CMD java -jar ./server.jar ./public