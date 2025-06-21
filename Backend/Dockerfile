# Dockerfile inside /Backend

FROM node:18

# Create app directory
WORKDIR /app

# Copy all files from one level above (root of project)
COPY ../ .

# Install backend dependencies
RUN cd Backend && npm install

# Set working directory to where server.js is
WORKDIR /app/Backend

# Expose port
EXPOSE 5000

# Run the backend server
CMD ["node", "server.js"]
