FROM eclipse-temurin:17-jdk AS build
WORKDIR /app
COPY . .
RUN sh ./gradlew build -x test

FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]