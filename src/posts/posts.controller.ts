import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller("posts")
export default class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {
  }

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(":id")
  getPostById(@Param("id") id: string) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  async createPost({ post }: { post: CreatePostDto }) {
    return this.postsService.createPost(post);
  }

  @Put("id")
  async replacePost({ id, post }: { id: string, post: UpdatePostDto }) {
    return this.postsService.replacePost(Number(id), post);
  }

  @Delete("id")
  async deletePost(@Param("id") id: string) {
    return this.postsService.deletePost(Number(id));
  }
}