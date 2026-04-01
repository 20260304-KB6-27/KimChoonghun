<template>
  <nav class="navbar navbar-dark bg-black">
    <div class="container">
            <a class="navbar-brand text-white" href="#">이날치</a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span><i class="navbar-toggler-icon"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">홈</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">소개</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/members" class="nav-link">멤버</RouterLink>
                    </li>
                    <li class="nav-item">
                         <RouterLink to="/video" class="nav-link">영상</RouterLink>
                    </li>
                </ul>
            </div>
        </div>      
  </nav>
</template>

<script setup>



</script>

<style scoped>



</style>