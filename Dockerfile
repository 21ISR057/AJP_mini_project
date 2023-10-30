FROM openjdk:18-jdk-alpine
WORKDIR /app
COPY target/postman-0.0.1-SNAPSHOT.jar postman-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "postman-0.0.1-SNAPSHOT.jar"]
