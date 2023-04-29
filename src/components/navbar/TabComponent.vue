<template>
    <div v-if="tabselected === true" class="tabcomponent">
        <div class="tabcomponent__radiusleft__selected">
            <div class="tabcomponent__radiusleft__inside"></div>
        </div>
        <div class="tabcomponent__content__selected">
            <div class="tabcomponent__radius__topleft"></div>
            <v-card-subtitle class="pa-0 d-flex align-center">{{ title }}</v-card-subtitle>
            <div class="tabcomponent__radius__topright"></div>
        </div>
        <div class="tabcomponent__radiusright__selected">
            <div class="tabcomponent__radiusright__inside"></div>
        </div>
    </div>
    <div v-if="tabselected === false" class="tabcomponent">
        <v-spacer></v-spacer>
        <div class="tabcomponent__radiusleft__unselected">
            <div class="tabcomponent__radiusleft__inside"></div>
        </div>
        <div class="tabcomponent__content__unselected">
            <v-card-subtitle>{{ title }}</v-card-subtitle>
        </div>
        <div class="tabcomponent__radiusright__unselected">
            <div class="tabcomponent__radiusright__inside"></div>
        </div>
    </div>
</template>

<script>
export default {
    // components: {
    //     NavBar
    // },
    props: {
        tabselected: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'No Title'
        }
    },

    data: () => ({
        // tabselected: false,
    }),
}
</script>

<style>
.tabcomponent {
    display: flex;
    align-items: center;
}
/* .unselected{
    border-left: 1px solid black;
    height: 20px;
} */
/* Tab Selected */

.tabcomponent__radiusleft__selected {
    height: 30px;
    width: 5px;
    background-color: transparent;
    z-index: 10;
}

.tabcomponent__radiusleft__selected .navbar__top {
    background-color: transparent;
}

.tabcomponent__radiusleft__inside {
    height: 30px;
    width: 6px;
    background-color: #f2f2f2;
    border-bottom-right-radius: 6px;
    z-index: 10;
}

.tabcomponent__content__selected {
    height: 30px;
    width: 150px;
    background-color: transparent;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
}

.tabcomponent__radiusright__selected {
    height: 30px;
    width: 6px;
    background-color: transparent;
    z-index: 10;
}

.tabcomponent__radiusright__inside {
    height: 30px;
    width: 6px;
    background-color: #f2f2f2;
    border-bottom-left-radius: 6px;
    z-index: 10;
}

.tabcomponent__radius__topleft{
    height: 5px;
    width: 5px;
    background-image: radial-gradient(circle at 100% 100%, transparent 5px, #f2f2f2 5px);

}
.tabcomponent__radius__topright{
    height: 5px;
    width: 5px;
    background-image: radial-gradient(circle at 0% 100%, transparent 5px, #f2f2f2 5px);
}
/* Tab Unselected */

.tabcomponent__radiusleft__unselected {
    height: 30px;
    width: 5px;
    background-color: #f2f2f2;
}

.tabcomponent__radiusleft__inside {
    height: 30px;
    width: 5px;
    background-color: #f2f2f2;
    /* border-bottom-right-radius: 6px; */
}

.tabcomponent__content__unselected {
    height: 30px;
    width: 150px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-top-left-radius: 6px;
    border-top-right-radius: 6px; */
}

.tabcomponent__radiusright__unselected {
    height: 30px;
    width: 5px;
    background-color: #f2f2f2;
}
</style>