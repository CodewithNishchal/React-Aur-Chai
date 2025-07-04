import conf from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";
import { slugify } from "../assets/slugify";

class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);// Your project ID
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, feauturedImage, status, userId }) {
        console.log(feauturedImage)
         try {
             const sanitizedSlug = slugify(slug)
             console.log(slug)
             return await this.databases.createDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug,
                 {
                    title,
                    content,
                    feauturedImage,
                     status,
                    userId,
                 }
            )
             
         } catch (error) {
             console.log(error);
         }
    }
    
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            const sanitizedSlug = slugify(slug)
            return this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async deletePost(slug) {
        try {
            const sanitizedSlug = slugify(slug)
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async getPost(slug) {
        try {
            console.log(slug)
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getPosts(queries = []) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(error)
        }
    }

    //File Upload Services

    async uploadFile(file) {
        console.log(file)
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileId) {
        // console.log(fileId)
        try {
            const prev = this.bucket.getFileDownload(conf.appwriteBucketId, fileId);
            console.log(prev)
            return prev
        } catch (error) {
            console.log(error);
            
        }
    }
 }

const service = new Service()

export default service;