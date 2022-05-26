import { createRouter, createWebHistory} from "vue-router";
import AnimationsView from "../views/AnimationsView.vue";
import VideoView from "../views/VideoView.vue";
import LoginScreen from "@/views/LoginScreen";
import RegisterScreen from "@/views/RegisterScreen";
import LoggedinScreen from "@/views/LoggedinScreen";

const routes = [
    {
        path: '/',
        component: AnimationsView,
    },
    {
        path: '/video',
        component: VideoView,
    },
    {
        path: '/login',
        component: LoginScreen,
    },
    {
        path: '/register',
        component: RegisterScreen,
    },
    {
        path: '/loggedin',
        component: LoggedinScreen,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
