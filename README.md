# Realtime Chat App

This is a full stack chat application built with Next.js 13, Upstash Redis as the database, React for the user interface, and written in TypeScript.

## Features

- Realtime messaging: Users can chat in real time with each other.
- User authentication: Users can create accounts and log in to participate in the chat.
- User presence: Users can see the online status of other users.
- Message history: Users can view previous chat messages.

## Technologies Used

- Next.js 13: A React framework for building server-side rendered and statically generated applications.
- Upstash Redis: A cloud-hosted Redis database-as-a-service.
- React: A JavaScript library for building user interfaces.
- TypeScript: A statically-typed superset of JavaScript.
- TailWindCSS: Styling the user interface.
- WebSockets: Realtime communication between server and client.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd chat-app`
3. Install the dependencies: `npm install` or `yarn install`

## Configuration

You will need to set up the following environment variables:

- `NEXT_PUBLIC_UPSTASH_URL`: The URL of your Upstash Redis database.
- `NEXT_PUBLIC_UPSTASH_PASSWORD`: The password for your Upstash Redis database.
- `NEXT_PUBLIC_JWT_SECRET`: A secret key used for JSON Web Token (JWT) encryption.

## How to Run

1. Start the development server: `npm run dev` or `yarn dev`
2. Open your browser and navigate to `http://localhost:3000`

## Deployment

To deploy this application:

1. Build the production-ready files: `npm run build` or `yarn build`
2. Deploy the files to your hosting provider of choice.

## License

This project is licensed under the MIT license. Please see the `LICENSE` file for more information.
