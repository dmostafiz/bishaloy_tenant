# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Copy built artifacts from builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Expose port (Railway sets PORT env var, Nuxt listens on it)
ENV PORT=3000
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
