<template>
    <h2>3. CSS 모듈</h2>
    <!-- CSS 모듈은 객체처럼 사용한다 -->
    <!-- :class 바인드 -->
    <div :class="style.box">CSS 모듈이 적용된 박스입니다.</div>
    <div>style : {{ style }}</div>
</template>

<script setup>
    import { useCssModule } from 'vue';

    // composition 방식 -> useCssModule()로 $style 객체를 꺼내옴
    const style = useCssModule();
</script>

<style module>
/* .box[~] : ~라는 속성에 대한 스타일 적용 */
/*
    module
    - CSS 모듈은 클래스명 자체를 고유하게 바꾼다.
    Scoped 속성
    - 이 컴포넌트에만 스타일을 적용
    - Vue가 data-v-해시값 속성을 생성하여 적용함
    - 다른 컴포넌트의 같은 클래스명과 충돌하지 않음
*/
.box {
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: greenyellow;
    border: 2px solid green;
}
</style>