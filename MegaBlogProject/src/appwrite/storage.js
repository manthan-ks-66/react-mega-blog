import config from "../config/config";
import { ID, Databases, Storage, Client, Query } from "appwrite";

export class StorageService {
  client = new Client();
  storage;
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.storage = new Storage(this.client);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId, slug }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteArticlesCollectionId,
        slug,
        {
          title,
          content,
          userId,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error in creating post: ", error);
    }
  }

  async updateDocument(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteArticlesCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error in updating post: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteArticlesCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite error in deleting the document: ", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteArticlesCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite error in getting the document: ", error);
    }
  }

  async listAllPosts() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteArticlesCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Appwrite error in listing the post: ", error);
      return false;
    }
  }
}

const storageService = new StorageService();

export default storageService;
