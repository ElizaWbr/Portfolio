<template>
    <v-card class="pa-2 ma-3">
        <v-card-title>{{ $t('aboutme-professionalinfo') }}:</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="card__text-justify">
            &nbsp; &nbsp; {{ $t('aboutme-text-one-start') }} {{ age }} {{ $t('aboutme-text-one') }}
            <br>
            &nbsp; &nbsp; {{ $t('aboutme-text-two') }}
            <div class="d-flex justify-center mt-4 mb-4">
                <div class="aboutme__languages" style="background-color: #f89820;">Java</div>
                <div class="aboutme__languages" style="background-color: #f7df1e;">JavaScript</div>
                <div class="aboutme__languages" style="background-color: #00758f;">MySQL</div>
                <div class="aboutme__languages" style="background-color: #f06529;">HTML5</div>
                <div class="aboutme__languages" style="background-color: #2965f1;">CSS</div>
                <div class="aboutme__languages" style="background-color: #42b883;">Vuejs</div>
                <div class="aboutme__languages" style="background-color: #61dbfb;">React</div>
                <div class="aboutme__languages" style="background-color: #5a29e4;">Axios</div>
                <div class="aboutme__languages" style="background-color: #f5820d;">Firebase Firestore</div>
                <div class="aboutme__languages" style="background-color: #ffcb2b;">Firebase Authentication</div>
            </div>
            <v-divider></v-divider>
            <v-card-title>
                {{ $t('aboutme-certificates') }}:
            </v-card-title>
            <a href="https://drive.google.com/file/d/1U-UdwN4OVHCBWY-eG7LXNqtiy7mZeb0M/view?usp=sharing">
                {{ $t('aboutme-certificates-toefl') }}</a>
            <br>
            <a href="https://drive.google.com/file/d/1ocaiUS0PmlXyd3do89znFiER8KRc5sxE/view?usp=sharing">
                {{ $t('aboutme-certificates-obi') }}</a>
            <br>
            <a href="https://drive.google.com/file/d/1uoeDbmBN1OVw9R6G3C0JrUYffydaXs1z/view?usp=sharing">
                {{ $t('aboutme-certificates-math-art') }}</a>
            <br>
            <a href="https://drive.google.com/file/d/1D3SE9Tety0uTXJPNEXEtyKi6e3S_RdK8/view?usp=sharing">
                {{ $t('aboutme-certificates-vice') }}</a>
            <br>
            <a href="https://drive.google.com/file/d/1l3Mm7VW4AMH45mm3q6gQlA8hgK4hFz-_/view?usp=sharing">
                {{ $t('aboutme-certificates-intern') }}</a>
            <br>
            <a href="https://drive.google.com/file/d/1hAVhRaK_rhi0sN4wzYMLJ-ShOrGQRhyf/view?usp=sharing">
                {{ $t('aboutme-certificates-softblue') }}</a>
            <br>
            <a href="https://drive.google.com/file/d/1tQRcE_WR5g3de5Nba9-WxAaVV9O_hROW/view?usp=sharing">
                {{ $t('aboutme-certificates-fullstack-journey') }}</a>
        </v-card-text>


    </v-card>
    <v-card class="pa-2 ma-3">
        <v-card-title>
            {{ $t('aboutme-personalinfo') }}:
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="card__text-justify">
            &nbsp; &nbsp; {{ $t('aboutme-text-three') }}
            <br>
            &nbsp; &nbsp; {{ $t('aboutme-text-four') }}
            <br>
            &nbsp; &nbsp; {{ $t('aboutme-instagram') }} <a href="https://www.instagram.com/eliza.wbr/">Instagram</a>.
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        age: 18,
    }),
    mounted() {
        const date = new Date();
        const today = date.getDate();
        const currentMonth = date.getMonth() + 1;
        const currentYear = date.getFullYear();

        if (currentMonth < 7) {
            this.age = currentYear - 2004 - 1;
            console.log(this.age)
        } else if (currentMonth === 7 && today < 9) {
            this.age = currentYear - 2004 - 1;
            console.log(this.age)
        } else {
            this.age = currentYear - 2004;
            console.log(this.age)
        }
    }
}
</script>
