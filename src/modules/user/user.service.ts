import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const createOrUpadteProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({ data });
  return result;
};

const getUsers = async (): Promise<User[]> => {
  const result = prisma.user.findMany({
    include: {
        profile: true
    }
  });
  return result;
};

const getSingleUser = async (id: number): Promise<User | null> => {
  const result = prisma.user.findUnique({
    where: {
      id,
    },
    include: {
        profile: true
    }
  });
  return result;
};

export const UserService = {
  createUser,
  createOrUpadteProfile,
  getUsers,
  getSingleUser,
};
