<script>

import router from "@/router/index.js";

export default {
  name: "header-content",
  data() {
    return{
      items: [
        {label: this.$t('header.smallbox.profile'), icon: 'pi pi-user', to: "/profile"},
        {label: this.$t('header.smallbox.payinfo'), icon: 'pi pi-credit-card', to: '/paymentInformation'},
        {label: this.$t('header.smallbox.rentals'), icon: 'pi pi-book', to: '/currentRent'},
        {separator: true},
        {label: this.$t('logout'), icon: 'pi pi-sign-out', command: () => {console.log('Logout clicked'); this.logout();}
        }
      ],
      name: localStorage.getItem('name'),

    }
  },
  created() {
  },
  methods: {
    router() {
      return router
    },
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    },
    logout(){
      localStorage.clear();
      this.$router.push('/signin');
    }
  }
}

</script>

<template>

  <pv-toolbar style="border-radius: 0; padding: 0 2rem; background-color:#A7E3EF" class="flex items-center">
    <template #start>
     <router-link to="/rent" class="flex items-center">
      <img class="h-2rem w-auto" src="../../assets/logo.svg" alt="Logo SafeCycle" />
    </router-link>
    </template>

    <template #end>
      <div class="flex align-items-center gap-5 h-4rem">
        <pv-button class="w-8rem h-full text-xs p-0 rounded-0" style="border-radius: 0" :label="$t('header.buttons.rent')" @click="this.$router.push('/rent')" text plain />
        <pv-button class="w-8rem h-full text-xs p-0 rounded-0" style="border-radius: 0" :label="$t('header.buttons.touring')" @click="this.$router.push('/touring')" text plain/>
        <pv-button class="w-8rem h-full text-xs p-0 rounded-0" style="border-radius: 0" :label="$t('header.buttons.booking')" @click="this.$router.push('/booking')" text plain/>


        <pv-avatar image="https://t3.ftcdn.net/jpg/15/52/90/62/360_F_1552906216_PNnK8BBCBslN76M83q9scuMFJVCdU587.jpg" @click="toggleMenu" ref="menu" class="w-2rem h-2rem" shape="circle"/>
        <pv-menu ref="menu" :model="items" :popup="true" class="p-3" style="background-color: #C9F0C4;">

          <template #start>
            <span class="inline-flex items-center h-20 gap-1 px-2 py-2">
            <span style="color: #124611; font-weight: bold">{{ $t('header.smallbox.hello') }} {{this.name}} 👋</span>
            </span>
          </template>
          <template #item="{ item, props }">
            <router-link
                :to="item.to"
                v-bind="props.action"
                class="flex items-center w-full px-3 py-2 hover:bg-green-100 rounded-md"
            >
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </router-link>
          </template>

        </pv-menu>

      </div>
    </template>
  </pv-toolbar>

</template>

<style scoped>

</style>
