FROM openjdk:18-jdk-alpine
WORKDIR /app
COPY target/POSTMAN-0.0.1-SNAPSHOT.jar POSTMAN-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "POSTMAN-0.0.1-SNAPSHOT.jar"]
