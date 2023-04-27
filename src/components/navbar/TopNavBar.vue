<template>
    <div class="navbar__top">
        <div class="navbar__top__spacer"></div>
        <div class="navbar__top__tabcomponent">
            <!-- sobre, projetos, tcc, contatos -->
            <button @click="changetab(1)">
                <TabComponent :title="$t('about-me')" :tabselected="selectone" />
            </button>
            <button @click="changetab(2)">
                <TabComponent :title="$t('projects')" :tabselected="selecttwo" v-on:click="changetab(2)" />
            </button>
            <button @click="changetab(3)">
                <TabComponent :title="$t('final-page')" :tabselected="selectthree" />
            </button>
            <button @click="changetab(4)">
                <TabComponent :title="$t('contact')" :tabselected="selectfour" />
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
}),
methods: {
    changetab(id) {
        if (id === 1) {
            this.selectone = true;
            this.selecttwo = false;
            this.selectthree = false;
            this.selectfour = false;
            this.$router.push('/aboutme');
        } else if (id === 2) {
            this.selectone = false;
            this.selecttwo = true;
            this.selectthree = false;
            this.selectfour = false;
            this.$router.push('/myprojects');
        } else if (id === 3) {
            this.selectone = false;
            this.selecttwo = false;
            this.selectthree = true;
            this.selectfour = false;
            this.$router.push('/finalpaper');
        } else if (id === 4) {
            this.selectone = false;
            this.selecttwo = false;
            this.selectthree = false;
            this.selectfour = true;
            this.$router.push('/mycontacts');
        }
    }
}
}
</script>

<style>
.navbar__top__spacer{
    width: 10px;
    background-color: #f2f2f2;
    border-top-left-radius: 3px;
    height: 30px;
}
.navbar__top__background {
background-image: linear-gradient(to right, #640abd, #ff80b4);
}

.navbar__top {
background-image: linear-gradient(to right, #640abd, #ff80b4);
width: 100%;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 0px 0px 0px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
}
.navbar__top__icons{
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    width: fill;
    background-color: #f2f2f2;
    border-top-right-radius: 4px;
}

.navbar__top__tabcomponent {
display: flex;
border-top-left-radius: 6px;
}

.navbar__top__left {
height: 30px;
display: flex;
align-items: center;
}

.navbar__top__icon {
height: 6px;
width: 6px;
background-color: #0d0d0d;
border-radius: 25px;
margin-right: 5px;
}
</style>