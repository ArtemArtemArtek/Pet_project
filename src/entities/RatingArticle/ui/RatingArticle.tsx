import React from 'react';
import { Rating } from '../../../features/Rating';
import {
    useGetArticleRating,
    usePostArticleRating,
} from '../model/service/ratingEnpoints';
import { Skeleton } from '../../../shared/ui/Skeleton/Skeleton';

interface RatingArticleProps {
    userID: number;
    articleID: string;
}

export const RatingArticle: React.FC<RatingArticleProps> = (props) => {
    const { articleID, userID } = props;
    const { data, isLoading } = useGetArticleRating({
        articleID: articleID,
        userID: userID.toString(),
    });
    const [rateArticle] = usePostArticleRating();

    console.log(data);

    const onSelectStarFunction = (stars: number, feedback?: string) => {
        rateArticle({
            articleID: articleID,
            userID: userID.toString(),
            rating: stars,
            feedback: feedback ?? null,
        });
    };

    if (isLoading) {
        return <Skeleton />;
    }

    return (
        <Rating
            title="Оцените статью"
            onSelectStar={onSelectStarFunction}
            selectedStars={data[0]?.rating}
        />
    );
};
