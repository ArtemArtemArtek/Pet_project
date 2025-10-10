import { user } from "../../../../entities/User";

export interface CommentType{
      id: number,
      text: string,
      user: user,
}