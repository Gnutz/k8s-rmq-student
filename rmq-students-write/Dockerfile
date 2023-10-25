# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /app/
COPY . /app/
RUN npm install
CMD ["node", "student-writer.js"]
EXPOSE 3000