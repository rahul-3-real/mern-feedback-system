import app from "./app.js";

const connectServer = () => {
  const PORT = process.env.PORT || 8000;

  try {
    const connection = app.listen(PORT, () => {
      console.log(`😀 Server listening on http://localhost:${PORT}`);
    });
    return connection;
  } catch (error) {
    console.log(`😒 ERROR: ${error.message}`);
  }
};

export default connectServer;
