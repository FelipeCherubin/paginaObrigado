<template>
    <div class="body">
        <header-home/>
        
        <top-email />

        <features-slides />

        <companies-home id="testegratis"/>

        <features-side id="funcionamento"/>

        <functions-video/>

        <responsive-table />

        <price-table id="preco"/>       

        <bottom-email />

        <footer-home/>
    </div>
</template>
<script>
 import headerHome from '../components/headerHome.vue'
import topEmail from '../components/topEmail.vue'
import featuresSlides from '../components/featuresSlides.vue'
 import companiesHome from '../components/companiesHome.vue'
  import featuresSide from '../components/featuresSide.vue'
  import functionsVideo from '../components/functionsVideo.vue'
  import responsiveTable from '../components/responsiveTable.vue'
 import priceTable from '../components/priceTable.vue'
  import bottomEmail from '../components/bottomEmail.vue'
  import footerHome from '../components/footerHome.vue'

export default {
    components: {
        headerHome,
        topEmail,
        // featuresSlides,
        // companiesHome,
        // featuresSide,
        // functionsVideo,
        // responsiveTable,
        // priceTable,
        // bottomEmail,
        footerHome
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>