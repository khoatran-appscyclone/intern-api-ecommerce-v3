export function uuid(): string {
  return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Generate random number between 0 and 15
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // Set the bits for version and variant
    return v.toString(16); // Convert the value to hexadecimal
  });
}
