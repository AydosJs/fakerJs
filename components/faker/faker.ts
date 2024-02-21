import { faker } from "@faker-js/faker"; // Correct import

function generateUserData(): UserData {
  return {
    name: faker.person.fullName(), // Use the correct function name
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
    },
  };
}
