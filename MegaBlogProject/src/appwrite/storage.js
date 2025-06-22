import config from "../config/config";
import { ID, Databases, Storage, Client } from "appwrite";

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
}

const storageService = new StorageService();

export default storageService;
