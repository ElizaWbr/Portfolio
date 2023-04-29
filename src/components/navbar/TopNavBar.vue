<template>
    <div class="navbar__top">
        <div class="navbar__top__spacer"></div>
        <div class="navbar__top__tabcomponent">
            <button @click="changetab(1)">
                <TabComponent :title="$t('about-me')" :tabselected="selectone" />
            </button>
            <button @click="changetab(2)">
                <TabComponent :title="$t('projects')" :tabselected="selecttwo" />
            </button>
            <button @click="changetab(3)">
                <TabComponent :title="$t('final-page')" :tabselected="selectthree" />
            </button>
            <button @click="changetab(4)">
                <TabComponent :title="$t('contact')" :tabselected="selectfour" />
            </button>
            <button @click="changetab(5)">
                <TabComponent :title="$t('user-account')" :tabselected="selectfive" />
            </button>
        </div>
        <div class="navbar__top__icons">
            <div>
                <span class="mdi mdi-window-minimize"></span>
                <span class="mdi mdi-window-restore pl-3"></span>
                <span class="mdi mdi-window-close pl-3"></span>
            </div>
        </div>
    </div>
</template>

<script>
import TabComponent from './TabComponent.vue'

export default {
    components: {
        TabComponent
    },
    data: () => ({
        selectone: true,
        selecttwo: false,
        selectthree: false,
        selectfour: false,
        selectfive: false,
    }),
    methods: {
        changetab(id) {
            if (id === 1) {
                this.selectone = true;
                this.selecttwo = false;
                this.selectthree = false;
                this.selectfour = false;
                this.selectfive = false;
                this.$router.push('/aboutme');
            } else if (id === 2) {
                this.selectone = false;
                this.selecttwo = true;
                this.selectthree = false;
                this.selectfour = false;
                this.selectfive = false;
                this.$router.push('/myprojects');
            } else if (id === 3) {
                this.selectone = false;
                this.selecttwo = false;
                this.selectthree = true;
                this.selectfour = false;
                this.selectfive = false;
                this.$router.push('/finalpaper');
            } else if (id === 4) {
                this.selectone = false;
                this.selecttwo = false;
                this.selectthree = false;
                this.selectfour = true;
                this.selectfive = false;
                this.$router.push('/mycontacts');
            } else if (id === 5) {
                this.selectone = false;
                this.selecttwo = false;
                this.selectthree = false;
                this.selectfour = false;
                this.selectfive = true;
                this.$router.push('/useraccount');
            }
        }
    }
}
</script>