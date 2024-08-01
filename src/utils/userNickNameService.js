const NickName = 'NickName';

const UserNickNameService = {
    getNickName() {
        return localStorage.getItem(NickName);
    },
    removeNickName() {
        localStorage.removeItem(NickName);
    },
    setNickName(nickName) {
        localStorage.setItem(NickName, nickName);
    },
};

export default UserNickNameService;
