const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteArticlesId: String(import.meta.env.VITE_ARTICLES_ID),
  appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
};

export default config;
