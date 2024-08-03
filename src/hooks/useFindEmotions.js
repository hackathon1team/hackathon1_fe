import { emotions } from '../constants/emotions';

export const useFindEmotions = (emotion) => {
    const emotionList = [
        ...emotions.positiveEmotions,
        ...emotions.negativeEmotions,
        ...emotions.neutralEmotions,
    ];
    const totalEmotion = emotionList.find((el) => el.type === emotion);
    return totalEmotion ? totalEmotion.emotions + totalEmotion.type : emotion;
};
