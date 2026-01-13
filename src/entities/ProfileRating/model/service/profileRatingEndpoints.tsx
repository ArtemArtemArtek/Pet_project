import { rtkApi } from "../../../../shared/api/RTKApi";
import { ProfileRating } from "../types/profileRatingTypes";

interface getProfileRatingProps{
    userID: string,
    profileID: string, 
}

export interface postProfileRatingProps{
    userID: string
    profileID: string
    rating: number
    feedback?: string
}

const ProfileRatingAPI = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<ProfileRating[], getProfileRatingProps>({
      query: ({profileID, userID}) => ({
        url:'/profile-rating',
        params:{
              profileID: profileID,
              userID: userID 
        }
      }),
    }),
    postProfileRating: build.mutation<void, postProfileRatingProps>({
        query:(arg)=>({
          url:'/profile-rating',
          method: 'POST',
          body: arg
        })
    })
  }),
})

export const useGetProfileRating = ProfileRatingAPI.useGetProfileRatingQuery
export const usePostProfileRating = ProfileRatingAPI.usePostProfileRatingMutation