import type { Category, Post, User } from "@prisma/client";
import type { PaginatedPostsResponse } from "./definitions";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from "next/navigation";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/categories", {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.json() as Category[];

    return responseData;
  } catch (err) {
    console.error('getCategories', err);
    return notFound();
  }
};

export interface ExtendedPost extends Post {
  user: User;
}

export const getSinglePost = async (
  slug: string
): Promise<ExtendedPost | null> => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post: " + slug);
    }

    const responseData = await response.json() as ExtendedPost;
    return responseData;
  } catch (error) {
    console.error('getSinglePost', error);
    return notFound();
  }
};

export const getPosts = async ({
  cat,
  page,
  limit = 4,
}: {
  cat?: string;
  page: number;
  limit: number;
}): Promise<PaginatedPostsResponse> => {
  try {
    const url = `http://localhost:3000/api/posts?page=${page}&limit=${limit}${
      cat ? `&cat=${cat}` : ""
    }`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Not OK" + response.statusText);
    }

    const responseData = await response.json() as PaginatedPostsResponse;
    return responseData;
  } catch (error) {
    console.error('getPosts', error);
    return notFound();
  }
};

export const uploadToCloudinary = async (
  file: string | Blob
): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`http://localhost:3000/api/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json() as { url: string };
    return data.url;
  } catch (error) {
    console.error('uploadToCloudinary', error);
    throw new Error('Failed to upload file');
  }
};
