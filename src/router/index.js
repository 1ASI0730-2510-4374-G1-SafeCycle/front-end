
/**
 * @fileoverview Router configuration for the SafeCycle application
 * Defines all routes and navigation behavior for the application
 */

import {createRouter, createWebHistory} from "vue-router";
const EntryScreenComponent = () => import("@/UserManagement/pages/entry-screen.component.vue");
const SignUpStudentComponent = () => import("@/UserManagement/pages/sign-up-student.component.vue");
const SignUpTouristComponent = () => import("@/UserManagement/pages/sign-up-tourist.component.vue");
const SignInComponent = () => import("@/UserManagement/pages/signIn.component.vue");
const NotFoundPageComponent = () => import("@/public/components/notFoundPage.component.vue");
const TouringSelectComponent = () => import("@/Touring/pages/touringSelectComponent.vue");

const ProfilePageComponent = () => import("@/UserManagement/pages/profile-page.component.vue");
const ChangePasswordPageComponent = () => import("@/UserManagement/pages/change-password-page.component.vue");
const EditProfilePageComponent = () => import("@/UserManagement/pages/edit-profile-page.component.vue");

const CurrentRentalPageComponent = () => import('@/Renting/pages/current-rental-page.component.vue');
const RentPageComponent = () => import('@/Renting/pages/rent-page.component.vue');
const RentChoosePageComponent = () => import('@/Renting/pages/rent-choose-page.component.vue');
const SuccessRentPageComponent = () => import('@/Renting/pages/success-rent-page.component.vue');

const PaymentInformationComponent = () => import("@/UserManagement/pages/payment-information.component.vue");
const PaymentInformationEditComponent = () => import("@/UserManagement/pages/payment-information-edit.component.vue");

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
        { path: '/signup', name: 'signup-page-entry', component: EntryScreenComponent , meta: {title: 'Entry screen for sign up Page'} },
        { path: '/signup/student', name: 'signup-page-student', component: SignUpStudentComponent , meta: {title: 'Sign Up Student Page'} },
        { path: '/signup/tourist', name: 'signup-page-tourist', component: SignUpTouristComponent , meta: {title: 'Sign Up Tourist Page'} },
        { path : '/touring', name: 'touring-page', component : TouringSelectComponent , meta: {title: 'Rent Choose Station Page'} },
        { path: '/signIn', name: 'signIn', component: SignInComponent },

        { path: '/rent', name: 'rent', component: RentPageComponent, meta: {title: 'Rent Page'}},
        { path: '/rent/choose', name: 'rent-choose-station', component: RentChoosePageComponent, meta: {title: 'Rent Choose Station Page'} },
        { path: '/rent/successRent', name: 'rent-success', component: SuccessRentPageComponent, meta: {title: 'Rent Success Page'} },
        { path: '/currentRent', name: 'current-rent', component: CurrentRentalPageComponent, meta: {title: 'Current Rent Page'} },

        { path: '/landing', name: 'landing', beforeEnter() {
                window.location.href = 'https://1asi0730-2510-4374-g1-safecycle.github.io/landing_page/';
            } },

        { path: '/profile', name: 'profile-page', component: ProfilePageComponent, meta: {title: 'Profile Page'} },
        { path: '/profile/changePassword', name: 'changePassword', component: ChangePasswordPageComponent, meta: {title: 'Change Password Page'} },
        { path: '/profile/edit', name: 'edit-profile', component: EditProfilePageComponent, meta: {title: 'Edit Profile Page'} },
        { path: '/paymentInformation', name: 'payment-information', component: PaymentInformationComponent, meta: {title: 'Payment Information Page'} },
        { path: '/paymentInformation/edit', name: 'payment-information-edit', component: PaymentInformationEditComponent, meta: {title: 'Edit Payment Information Page'} },
        { path: '/', name: 'start-page', component: EntryScreenComponent , meta: {title: 'Entry screen for sign up Page'} },
        {path: '/:pathMatch(.*)', name: '404 - nor found', component: NotFoundPageComponent, meta: {title: 'Not Found Page'} },

           ]
});

export default router;