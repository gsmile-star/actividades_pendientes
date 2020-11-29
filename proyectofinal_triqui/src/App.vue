<template>
<div>
  <section class="head d flex vh-flex-center">TRIQUI VUE</section>
  <router-view></router-view>
  <section class = "footer">Gracias por jugar!!</section>
</div> 
</template>

<script>
export default {
  name: 'app',
  data (){
    return{
      msg: 'welcome to your Vue.js App'
    }
  },
  created(){
    
  }
}
</script>