import { faker } from "@faker-js/faker"; // Correct import
import { nanoid } from "nanoid"; // For unique identifiers
import { NextApiResponse } from "next";

export default async function handler(req: Request, res: NextApiResponse) {
  // Get input parameters from request body (adjust names as needed)
  const { region, errorCount, seed } = await req.json();

  // Set seed, using provided seed or generating a new one
  faker.seed(seed || nanoid());

  // Generate user data with errors
  const users: UserData[] = [];
  for (let i = 0; i < 20; i++) {
    const user: UserData = {
      id: nanoid(),
      name: faker.person.fullName(region),
      email: faker.internet.email(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
      },
      phone: faker.phone.number(),
    };

    // Inject errors based on errorCount
    for (let j = 0; j < errorCount; j++) {
      // Pick a random field and modify it (implement your desired error types)
      const randomField =
        Object.keys(user)[Math.floor(Math.random() * Object.keys(user).length)];
      (user as any)[randomField] = faker.lorem.word();
    }

    users.push(user);
  }

  // Send response with generated users
  res.status(200).json(users);
}
