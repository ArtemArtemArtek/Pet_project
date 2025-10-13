import { user } from "../../../../entities/User";

export interface CommentType{
      id: number,
      body: string,
      user: user,
}