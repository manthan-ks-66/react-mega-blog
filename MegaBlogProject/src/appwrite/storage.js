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
      return false;
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
      return false;
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
      return false;
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
      return false;
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

  // upload file methods

  // bucketId is the storage service ID where the files will be uploaded

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serivice error :: uploadFile :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service error :: deleteFile :: ", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return await this.storage.getFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service error :: getFilePreview :: ", error);
      return false;
    }
  }
}

const storageService = new StorageService();

export default storageService;
