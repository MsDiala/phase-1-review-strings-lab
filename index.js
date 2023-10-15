const currentUser = 'YourName';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

//verify the results
console.log(currentUser);
console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);
