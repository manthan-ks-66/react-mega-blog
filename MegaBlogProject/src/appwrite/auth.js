import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  /* to avoid wastage of resource we are implementing a class constructor so that
  the client is called only when object is created and accessed (for better code practice) */

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, name, password }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (user) {
        // login user
        return this.loginUser({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log("Appwrite error in account creation: ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite error in getCurrentUser: ", error);
    }

    return null;
  }

  async loginUser({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
      return true;
    } catch (error) {
      console.log("Appwrite error in login user: ", error);
      return false;
    }
  }

  async logoutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite logout error: ", error);
      return false;
    }
  }
}

const authService = new AuthService();

export default authService;
