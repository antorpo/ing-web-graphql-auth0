import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const fs = require("fs");
async function main() {
  const clientRole = await prisma.role.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      type: "CLIENT",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const adminRole = await prisma.role.upsert({
    where: { id: "2" },
    update: {},
    create: {
      id: "2",
      type: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const adminUser = await prisma.user.upsert({
    where: { email: "adminappetite@yopmail.com" },
    update: {
      roleId: "2",
      updatedAt: new Date(),
    },
    create: {},
  });

  const restaurants = fillRestaurants(`${__dirname}/seed/restaurants.json`);

  for (const restaurant of restaurants) {
    const defaultRestaurants = await prisma.restaurant.upsert({
      where: { id: restaurant.id },
      update: {},
      create: {
        name: restaurant.name,
        phoneNumber: restaurant.phoneNumber,
        type: restaurant.type,
        userId: restaurant.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const fillRestaurants = (filePath: string) => {
  let rawdata = fs.readFileSync(filePath);
  let restaurants = JSON.parse(rawdata);
  return restaurants;
};
