import {createRouter, createWebHistory} from "vue-router";
import entryScreenComponent from "@/UserManagement/pages/entry-screen.component.vue";
import signUpStudentComponent from "@/UserManagement/pages/sign-up-student.component.vue";
import signUpTouristComponent from "@/UserManagement/pages/sign-up-tourist.component.vue";
import signInComponent from "@/UserManagement/pages/signIn.component.vue";
import notFoundPageComponent from "@/public/components/notFoundPage.component.vue";
import touringSelectComponent from "@/Touring/pages/touringSelectComponent.vue";
import paymentInformationComponent from "@/UserManagement/pages/payment-information.component.vue";
import paymentInformationEditComponent from "@/UserManagement/pages/payment-information-edit.component.vue";
import rentPageComponent from "@/Renting/pages/rent-page.component.vue";
import rentChoosePageComponent from "@/Renting/pages/rent-choose-page.component.vue";
import successRentPageComponent from "@/Renting/pages/success-rent-page.component.vue";
import touringBookComponent from "@/Touring/pages/touringBookComponent.vue";
import touringSuccessComponent from "@/Touring/pages/touringSuccessComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/signup', name: 'signup-page-entry', component: entryScreenComponent },
        { path: '/signup/student', name: 'signup-page-student', component: signUpStudentComponent },
        { path: '/signup/tourist', name: 'signup-page-tourist', component: signUpTouristComponent },
        { path : '/touring', name: 'touring-page', component : touringSelectComponent},
        {path : '/touring/:id', name: 'touring-detail', component: touringBookComponent},
        { path : '/touring/success/:id', name: 'touring-success', component: touringSuccessComponent },
        { path: '/signIn', name: 'signIn', component: signInComponent },

        { path: '/rent', name: 'rent', component: rentPageComponent },
        { path: '/rent/choose', name: 'rent-choose-station', component: rentChoosePageComponent },
        { path: '/rent/successRent', name: 'rent-success', component: successRentPageComponent },

        { path: '/landing', name: 'landing', beforeEnter() {
                window.location.href = 'https://1asi0730-2510-4374-g1-safecycle.github.io/landing_page/';
            } },
        { path: '/paymentInformation', name: 'payment-information', component: paymentInformationComponent },
        { path: '/paymentInformation/edit', name: 'payment-information-edit', component: paymentInformationEditComponent },
        {path: '/:pathMatch(.*)', name: '404 - nor found', component: notFoundPageComponent},

    ]
});

export default router;