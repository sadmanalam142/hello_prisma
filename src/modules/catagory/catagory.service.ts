import { Catagory, PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createCatagory = async (data: Catagory): Promise<Catagory> => {
  const result = await prisma.catagory.create({ data });
  return result;
};

export const CatagoryService = {
    createCatagory,
};
