# Local Chatbox

## Project Overview
This is a lightweight chat application designed to run on a local network. Built using Node.js and Socket.IO, the application allows multiple users to connect and exchange messages in real-time within the same local network. The project demonstrates the implementation of WebSocket technology for efficient two-way communication.

## Features
- Real-time messaging within the local network.
- Lightweight and easy to set up.
- Supports multiple users simultaneously.
- Minimalistic and responsive user interface.

## Technologies Used
- **Node.js**: Backend runtime for building the server.
- **Socket.IO**: WebSocket library for real-time, bidirectional communication.
- **HTML/CSS/JavaScript**: Frontend for the chat user interface.

## Prerequisites
- [Node.js](https://nodejs.org) (v14 or later recommended)
- Basic knowledge of JavaScript and web development.
- A local network to connect clients and the server.

## Installation
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```

4. **Access the chat application**:
   Open a web browser and navigate to `http://<server-ip>:<port>` (default port: 3000).

## Usage
1. Ensure all devices are connected to the same local network.
2. Start the server on one machine.
3. Open the application URL on any device's browser within the network.
4. Start chatting in real-time!

## Customization
- **Port**: Change the port in `server.js` if needed:
  ```javascript
  const PORT = 3000;
  ```
- **Styling**: Modify `styles.css` to customize the appearance.

## Troubleshooting
- **Connection Issues**: Ensure all devices are connected to the same network and the correct IP address is being used.
- **Dependencies**: Verify that all required npm packages are installed by running `npm install`.

## Future Enhancements
- Add user authentication.
- Implement private messaging.
- Enhance UI/UX with modern design frameworks.
- Add support for media sharing.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments
- [Node.js](https://nodejs.org)
- [Socket.IO](https://socket.io)

