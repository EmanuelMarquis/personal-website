FROM eclipse-temurin:17-alpine
RUN mkdir -p /app/public
COPY ./app/build/libs/server.jar /app
COPY ./app/public /app/public

EXPOSE 8000
CMD ["java", "-jar", "/app/server.jar", "/app/public"]