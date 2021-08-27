import axios from 'axios';


class PostService {
    constructor() {
        const instance = axios.create({
          baseURL: 'http://localhost:8000/api',
        });

        this.client = instance;
      }

      async getAll() {
        try {
          const { data } = await this.client.get('posts');
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return [];
      }

      async get(id) {
        try {
          const { data } = await this.client.get(`/posts/${id}?filter={"include":["comments"]}`);
            
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return {};
      }

      async add(newPost) {
        try {
          const { data } = await this.client.post('posts', newPost);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return null;
      }

      async edit(id, newPost) {
        try {
          const { data } = await this.client.put(`posts/${id}`, newPost);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return null;
      }

      async delete(postId) {
        try {
          const { data } = await this.client.delete(`posts/${postId}`);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return {};
      }

      async addComment(comment, postId){
          try{
              const {data} = await this.client.post(`posts/${postId}/comments`);
              return data;

          } catch (error) {
              console.log(error);
          }
          return{};
      }

      async getId(id) {
        try {
            const { data } = await this.client.get(`posts/${id}?filter={"include":
            ["comments"]}`)
            console.log(id);
            return data;
        }catch (error){
          console.log(error);
        }
    }
}

export default new PostService();