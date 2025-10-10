import { CommentType } from "../../../../features/Comment";
import { EntityState } from "@reduxjs/toolkit";

export interface CommentSchema extends EntityState<CommentType, number>{
    error?: string,
    isLoading?: boolean,
}