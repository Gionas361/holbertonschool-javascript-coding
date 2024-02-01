/* eslint-disable */
export default function displayMessage(message) {
  if (message == "") {
    return null;
  }
  return process.stdout.write(message);
}
