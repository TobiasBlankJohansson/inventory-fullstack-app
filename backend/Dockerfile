FROM maven:3.9.9-eclipse-temurin-23-alpine AS build

WORKDIR /app

COPY . .

ARG DB_URL DB_USERNAME DB_PASSWORD

ENV DB_URL=${DB_URL} DB_USERNAME=${DB_USERNAME} DB_PASSWORD=${DB_PASSWORD}

RUN mvn clean package --no-transfer-progress

FROM eclipse-temurin:23-jre-alpine

WORKDIR /app

COPY --from=build /app/target/crm-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "inventory-0.0.1-SNAPSHOT.jar"]