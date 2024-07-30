import { useQuery } from '@tanstack/react-query';
import MecoQuestionApi from '../../apis/MecoQuestionApi';

const getMecoQuestions = async (date) => {
    const res = await MecoQuestionApi.getMecoQuestion(date);
    return res.data;
};

const useGetMecoQuestions = (date) =>
    useQuery({
        queryKey: ['useGetMecoQuestions', date],
        queryFn: () => getMecoQuestions(date),
    });

export default useGetMecoQuestions;
