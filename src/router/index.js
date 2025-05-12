import {createRouter, createWebHistory} from "vue-router";
import entryScreenComponent from "@/UserManagement/pages/entry-screen.component.vue";
import signUpStudentComponent from "@/UserManagement/pages/sign-up-student.component.vue";
import signUpTouristComponent from "@/UserManagement/pages/sign-up-tourist.component.vue";
import signInComponent from "@/UserManagement/pages/signIn.component.vue";
import notFoundPageComponent from "@/public/components/notFoundPage.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/signup', name: 'signup-page-entry', component: entryScreenComponent },
        { path: '/signup/student', name: 'signup-page-student', component: signUpStudentComponent },
        { path: '/signup/tourist', name: 'signup-page-tourist', component: signUpTouristComponent },
        { path: '/signIn', name: 'signIn', component: signInComponent },
        { path: '/landing', name: 'landing', beforeEnter() {
                window.location.href = 'https://1asi0730-2510-4374-g1-safecycle.github.io/landing_page/';
            } },
        {path: '/:pathMatch(.*)', name: '404 - nor found', component: notFoundPageComponent}
    ]
});

export default router;