
/**
 * @fileoverview Router configuration for the SafeCycle application
 * Defines all routes and navigation behavior for the application
 */

import {createRouter, createWebHistory} from "vue-router";
import entryScreenComponent from "@/UserManagement/pages/entry-screen.component.vue";
import signUpStudentComponent from "@/UserManagement/pages/sign-up-student.component.vue";
import signUpTouristComponent from "@/UserManagement/pages/sign-up-tourist.component.vue";
import signInComponent from "@/UserManagement/pages/signIn.component.vue";
import notFoundPageComponent from "@/public/components/notFoundPage.component.vue";
import touringSelectComponent from "@/Touring/pages/touringSelectComponent.vue";
import paymentInformationComponent from "@/UserManagement/pages/payment-information.component.vue";
import paymentInformationEditComponent from "@/UserManagement/pages/payment-information-edit.component.vue";q
import profilePageComponent from "@/UserManagement/pages/profile-page.component.vue";
import changePasswordPageComponent from "@/UserManagement/pages/change-password-page.component.vue";
import editProfilePageComponent from "@/UserManagement/pages/edit-profile-page.component.vue";

const CurrentRentalPageComponent = () => import('@/Renting/pages/current-rental-page.component.vue');
const RentPageComponent = () => import('@/Renting/pages/rent-page.component.vue');
const RentChoosePageComponent = () => import('@/Renting/pages/rent-choose-page.component.vue');
const SuccessRentPageComponent = () => import('@/Renting/pages/success-rent-page.component.vue');


/**
 * @description Lazy-loaded component imports for route configuration
 * Using dynamic imports to enable code splitting and improve initial load performance
 */


const router = createRouter({


    /**
     * @type {import('vue-router').RouteRecordRaw[]}
     * @description Application route definitions.
     * Each route object contains:
     * - path: URL path for the route
     * - name: Unique identifier for the route
     * - component: Vue component to render
     * - meta: Additional metadata including page title
     */

    history: createWebHistory(),
    routes: [
        { path: '/signup', name: 'signup-page-entry', component: entryScreenComponent },
        { path: '/signup/student', name: 'signup-page-student', component: signUpStudentComponent },
        { path: '/signup/tourist', name: 'signup-page-tourist', component: signUpTouristComponent },
        { path : '/touring', name: 'touring-page', component : touringSelectComponent},
        { path: '/signIn', name: 'signIn', component: signInComponent },

        { path: '/rent', name: 'rent', component: RentPageComponent, meta: {title: 'Rent Page'}},
        { path: '/rent/choose', name: 'rent-choose-station', component: RentChoosePageComponent, meta: {title: 'Rent Choose Station Page'} },
        { path: '/rent/successRent', name: 'rent-success', component: SuccessRentPageComponent, meta: {title: 'Rent Success Page'} },
        { path: '/currentRent', name: 'current-rent', component: CurrentRentalPageComponent, meta: {title: 'Current Rent Page'} },

        { path: '/landing', name: 'landing', beforeEnter() {
                window.location.href = 'https://1asi0730-2510-4374-g1-safecycle.github.io/landing_page/';
            } },

        { path: '/profile', name: 'profile-page', component: profilePageComponent },
        { path: '/profile/changePassword', name: 'changePassword', component: changePasswordPageComponent },
        { path: '/profile/edit', name: 'edit-profile', component: editProfilePageComponent },
        { path: '/paymentInformation', name: 'payment-information', component: paymentInformationComponent },
        { path: '/paymentInformation/edit', name: 'payment-information-edit', component: paymentInformationEditComponent },
        {path: '/:pathMatch(.*)', name: '404 - nor found', component: notFoundPageComponent},

           ]
});

export default router;