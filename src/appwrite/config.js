import conf from '../conf/conf'

import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImg, status, userId}){
        try {

         return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, 
         {
            title, 
            content, 
            featuredImg, 
            status, 
            userId
         })
            
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImg,
                status,
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)

             return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {

            return await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries){
        try {
            return 
        } catch (error) {
            throw error;
        }
    }

}

const service = new Service();

export default service;
