<template>
    <li><input type="checkbox" :checked="idol.checked"/>{{ idol.name }}</li>
</template>

<script>
export default {
    name: "CheckboxItem2",
    props: ['idol'], // 속성명을 배열로 정의
    // data() {
    //     return {
    //         checked: false,
    //     }
    // }
}
</script>