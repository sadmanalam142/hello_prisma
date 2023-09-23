import { Post, PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: { author: true, catagory: true },
  });
  return result;
};

const updatePost = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: payload,
    include: {
      author: true,
      catagory: true,
    },
  });
  return result;
};

const deletePost = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
    include: {
      author: true,
      catagory: true,
    },
  });
  return result;
};

const getPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const totalData = await prisma.post.count();
  const skip = parseInt(page) * parseInt(limit) - parseInt(limit) || 0;
  const take = parseInt(limit) || totalData;

  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        catagory: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "asc" },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });

    const total = await tx.post.count();
    return {
      data: result,
      total,
    };
  });
};

const getSinglePost = async (id: number): Promise<Post | null> => {
  const result = prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      catagory: true,
    },
  });
  return result;
};

export const PostService = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getSinglePost,
};
