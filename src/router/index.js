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
import profilePageComponent from "@/UserManagement/pages/profile-page.component.vue";
import changePasswordPageComponent from "@/UserManagement/pages/change-password-page.component.vue";
import editProfilePageComponent from "@/UserManagement/pages/edit-profile-page.component.vue";
import currentRentalPageComponent from "@/Renting/pages/current-rental-page.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/signup', name: 'signup-page-entry', component: entryScreenComponent },
        { path: '/signup/student', name: 'signup-page-student', component: signUpStudentComponent },
        { path: '/signup/tourist', name: 'signup-page-tourist', component: signUpTouristComponent },
        { path : '/touring', name: 'touring-page', component : touringSelectComponent},
        { path: '/signIn', name: 'signIn', component: signInComponent },

        { path: '/rent', name: 'rent', component: rentPageComponent },
        { path: '/rent/choose', name: 'rent-choose-station', component: rentChoosePageComponent },
        { path: '/rent/successRent', name: 'rent-success', component: successRentPageComponent },
        { path: '/currentRent', name: 'current-rent', component: currentRentalPageComponent },

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