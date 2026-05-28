function alertPassenger(name) {
  console.log(`${name}: ${this.message}`);
}
const presentToGateWarning = {
  message: "Please present to boarding Gate 3",
  priority: 1,
};

// alertPassenger.call(presentToGateWarning, "Anoop");

const alertPass = alertPassenger.bind(presentToGateWarning, "Anoop Bind");
alertPass(); //So for bind create and call a new function
