function useStrAddDots(text, settingLength) {
    return text?.length >= settingLength
        ? text.substr(0, settingLength) + '...'
        : text;
}
export default useStrAddDots;
