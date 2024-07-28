export const useRandomQuestion = () => {
    let randomNum = Math.floor(Math.random() * 3);

    let secondQuestion = [
        '이 감정을 어떻게 표현했어요?',
        '왜 이 사건에 대한 감정이 크게 와닿나요?',
        '이 감정이 내 행동에 어떻게 영향을 미치고 있나요?',
    ];
    let thirdQuestion = [
        '앞으로 비슷한 상황이 발생했을 때, 어떻게 대처하면 좋을까요?',
        '스스로에게 어떤 말을 해주고 싶나요?',
        '이 상황을 통해 무엇을 배울 수 있을까요?',
    ];

    return [
        '이 상황에 대해 감정은 어땠으며, 원인은 무엇이었을까요?',
        secondQuestion[randomNum],
        thirdQuestion[randomNum],
    ];
};
