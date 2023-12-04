# FILE MANAGER

This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.

The objective is to build a simple platform to upload and view files:

1. User authentication via a token
2. List all files
3. Upload a new file
4. Change permission of a file
5. View a file
6. Generate thumbnails for images

## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.

## Usage

1. Ensure a Redis server is running.
2. Modify configurations in `utils/redis.js` if necessary.
3. Use the `redisClient` instance exported from `utils/redis.js` in your code.

## File Structure

project-root/
│
├── utils/
│ ├── redis.js
│
└── README.md


