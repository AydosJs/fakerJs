import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { FakerMap, UserData } from "@/types/types";
import { fakerMap } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const region = req.nextUrl.searchParams.get("region");
  const errors = req.nextUrl.searchParams.get("errors");
  const seed = req.nextUrl.searchParams.get("seed");
  const endOffset = req.nextUrl.searchParams.get("endOffset");

  const currentFaker = faker.helpers.arrayElement([
    fakerMap[region as keyof FakerMap] || fakerMap["en_US"],
  ]);

  currentFaker.seed(Number(seed) || 0);
  const users: UserData[] = [];

  for (let i = 0; i < Number(endOffset); i++) {
    const user: UserData = {
      id: currentFaker.string.uuid(),
      name: currentFaker.person.fullName(),
      email: currentFaker.internet.email(),
      address: {
        street: currentFaker.location.streetAddress(),
        city: currentFaker.location.city(),
        state: currentFaker.location.state(),
        zipCode: currentFaker.location.zipCode(),
      },
      phone: currentFaker.phone.number(),
    };

    // for (let j = 0; j < Number(errors) || 0; j++) {
    //   const randomField =
    //     Object.keys(user)[Math.floor(Math.random() * Object.keys(user).length)];

    //   // Skip if the randomField is 'id'
    //   if (randomField === "id") continue;

    //   // Get the value of the random field
    //   let fieldValue = (user as any)[randomField];

    //   // Check if the field value is an object (like 'address')
    //   if (typeof fieldValue === "object") {
    //     // Select a random subfield
    //     const randomSubfield =
    //       Object.keys(fieldValue)[
    //         Math.floor(Math.random() * Object.keys(fieldValue).length)
    //       ];
    //     let subfieldValue = fieldValue[randomSubfield];

    //     // Ensure the subfield value is a string
    //     if (typeof subfieldValue === "string") {
    //       // Select a random character index
    //       const charIndex = Math.floor(Math.random() * subfieldValue.length);

    //       // Select a random character
    //       const randomChar = faker.string.alpha();

    //       // Replace the character at the selected index with the random character
    //       subfieldValue =
    //         subfieldValue.substring(0, charIndex) +
    //         randomChar +
    //         subfieldValue.substring(charIndex + 1);

    //       // Assign the modified string back to the subfield
    //       fieldValue[randomSubfield] = subfieldValue;
    //     }
    //   } else if (typeof fieldValue === "string") {
    //     // Select a random character index
    //     const charIndex = Math.floor(Math.random() * fieldValue.length);

    //     // Select a random character
    //     const randomChar = faker.string.alpha();

    //     // Replace the character at the selected index with the random character
    //     fieldValue =
    //       fieldValue.substring(0, charIndex) +
    //       randomChar +
    //       fieldValue.substring(charIndex + 1);
    //   }

    //   // Assign the modified value back to the field
    //   (user as any)[randomField] = fieldValue;
    // }

    let senitizedError =
      Number(errors) > 100 ? Number(errors) / 2 : Number(errors);

    for (let j = 0; j < Math.floor(senitizedError); j++) {
      const randomField =
        Object.keys(user)[Math.floor(Math.random() * Object.keys(user).length)];

      // Skip if the randomField is 'id'
      if (randomField === "id") continue;

      // Get the value of the random field
      let fieldValue = (user as any)[randomField];

      // Check if the field value is an object (like 'address')
      if (typeof fieldValue === "object") {
        // Select a random subfield
        const randomSubfield =
          Object.keys(fieldValue)[
            Math.floor(Math.random() * Object.keys(fieldValue).length)
          ];
        let subfieldValue = fieldValue[randomSubfield];

        // Ensure the subfield value is a string
        if (typeof subfieldValue === "string") {
          // Select a random error type
          const errorType = Math.floor(Math.random() * 3);

          if (errorType === 0) {
            // Delete character
            if (subfieldValue.length > 0) {
              const charIndex = Math.floor(
                Math.random() * subfieldValue.length
              );
              subfieldValue =
                subfieldValue.substring(0, charIndex) +
                subfieldValue.substring(charIndex + 1);
            }
          } else if (errorType === 1) {
            // Add random character
            const charIndex = Math.floor(
              Math.random() * (subfieldValue.length + 1)
            );
            const randomChar = faker.string.alpha();
            subfieldValue =
              subfieldValue.substring(0, charIndex) +
              randomChar +
              subfieldValue.substring(charIndex);
          } else {
            // Swap near characters
            if (subfieldValue.length > 1) {
              const charIndex = Math.floor(
                Math.random() * (subfieldValue.length - 1)
              );
              const chars = subfieldValue.split("");
              [chars[charIndex], chars[charIndex + 1]] = [
                chars[charIndex + 1],
                chars[charIndex],
              ];
              subfieldValue = chars.join("");
            }
          }

          // Assign the modified string back to the subfield
          fieldValue[randomSubfield] = subfieldValue;
        }
      } else if (typeof fieldValue === "string") {
        // Select a random error type
        const errorType = Math.floor(Math.random() * 3);

        if (errorType === 0) {
          // Delete character
          if (fieldValue.length > 0) {
            const charIndex = Math.floor(Math.random() * fieldValue.length);
            fieldValue =
              fieldValue.substring(0, charIndex) +
              fieldValue.substring(charIndex + 1);
          }
        } else if (errorType === 1) {
          // Add random character
          const charIndex = Math.floor(Math.random() * (fieldValue.length + 1));
          const randomChar = faker.string.alpha();
          fieldValue =
            fieldValue.substring(0, charIndex) +
            randomChar +
            fieldValue.substring(charIndex);
        } else {
          // Swap near characters
          if (fieldValue.length > 1) {
            const charIndex = Math.floor(
              Math.random() * (fieldValue.length - 1)
            );
            const chars = fieldValue.split("");
            [chars[charIndex], chars[charIndex + 1]] = [
              chars[charIndex + 1],
              chars[charIndex],
            ];
            fieldValue = chars.join("");
          }
        }
      }

      // Assign the modified value back to the field
      (user as any)[randomField] = fieldValue;
    }

    users.push(user);
  }

  // return res.status(200).json(users);

  return NextResponse.json({
    message: "Users fetched successfully",
    users,
  });
}
