import Error404Page from '../components/error/error404';
import Header from '../components/header/Header';
import LogInPage from '../pages/logIn/logInPage';
import Socrates from '../pages/metaTutorial/socrates';
import MetaAbout from '../pages/metaTutorial/metaAbout';
import MyPagePage from '../pages/myPage/myPage';
import MecoQuestion from '../pages/question/mecoQuestion';
import QuestionPage from '../pages/question/questionPage';
import SignUpPage from '../pages/signUp/signUpPage';
import StatisticsPage from '../pages/statistics/statisticsPage';
import TimeCalendarPage from '../pages/timeCalendar/timeCalendarPage';
import QuestionSum from '../pages/question/components/QuestionSum';

const router = [
    {
        path: '/login',
        element: <LogInPage />,
    },
    {
        path: '/signUp',
        element: <SignUpPage />,
    },
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/',
                element: <TimeCalendarPage />,
            },
            {
                path: '/metaAbout',
                element: <MetaAbout />,
            },
            ,
            {
                path: '/socrates',
                element: <Socrates />,
            },
            {
                path: '/statistics',
                element: <StatisticsPage />,
            },
            {
                path: '/question',
                element: <QuestionPage />,
            },
            {
                path: '/question/:contents',
                element: <MecoQuestion />,
            },
            {
                path: '/questionSum/:today',
                element: <QuestionSum />,
            },

            {
                path: '/myPage',
                element: <MyPagePage />,
            },
        ],
    },
    {
        path: '/*',
        element: <Error404Page />,
    },
];

export default router;
