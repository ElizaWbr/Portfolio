<template>
    <div class="navbar__bottom">
        <div class="navbar__bottom__arrows">
            <span class="mdi mdi-arrow-left pr-3 pl-2"></span>
            <span class="mdi mdi-arrow-right pr-5"></span>
        </div>
        <div class="navbar__bottom__search">
            <span class="mdi mdi-magnify pl-2 pr-2"></span>
            <span>ELIZA WEBER</span>
        </div>
        <div class="navbar__bottom__icons">
            <router-link to="/login" class="mdi mdi-logout-variant pl-3 signin__icons"
                :title="$t('already-registered')"></router-link>
            <LocaleSwitcher />
        </div>
    </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
    components: {
        LocaleSwitcher
    },
    data: () => ({
        items: [
            { id: 'pt-br', title: 'Português', icon: 'mdi-phone' },
            { id: 'en', title: 'English', icon: 'mdi-phone' }
        ]
    }),
}
</script>

<style>

.navbar__bottom {
    background-image: linear-gradient(to right, #640abd, #ff80b4);
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
}

.navbar__bottom__arrows {
    display: flex;
    align-items: center;
}

.navbar__bottom__search {
    background-color: #f2f2f2;
    height: 18px;
    width: 1000px;
    border-radius: 25px;
    border: 1px solid #0d0d0d;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
}

.navbar__bottom__icons {
    display: flex;
    align-items: center;
}

.signin__icons {
    text-decoration: none;
    color: black;
}
</style>