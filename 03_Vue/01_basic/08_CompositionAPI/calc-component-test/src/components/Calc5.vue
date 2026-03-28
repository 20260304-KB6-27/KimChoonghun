<template>
    <div>
        X : <input type="text" v-model.number="x"/><br/>
    </div>
    <!-- <button @click="calcAdd">계산</button> -->
    <div>결과 : {{ result }}</div>
</template>


<!--
    <script setup> :
    - 간결한 컴포넌트를 작성하기 위한 문법
    - 보일러플레이트 코드 감소
    - 변수/함수를 템플릿에서 바로 사용 가능
-->
<script>
import { ref, watch } from 'vue';

export default {
    name: "Calc5",

    setup() {
        // 객체를 반응형으로 반환
        const x = ref(10);
        const result = ref(20);

        watch(x, (current, old) => {
            console.log(`${old} -> ${current}`);
            
            // computed : 의존하는 반응형 데이터가 변경될때만 자동으로 계산
            // watch : 변화에 반응하는 사이드 이펙트 -> API 호출, 로깅, 감시 대상이 아닌 다른 상태값을 변경하고 싶을때
            result.value = x.value * 2;
        })
        /*
        reactive()
         - 객체 전용 반응형 API (Object, Array, Map, Set)
         - 속성에 직접 접근 ([객체명].[속성명])
         - Proxy로 반응형 주입

        ref()
         - 모든 타입 가능 (원시값도 포함 num)
         - .value로 접근 ([반응형데이터명].value)
         - Wrapper 형태로 반응형 객체로 감싸 반응형을 주입함.
        */
       
        return {
            x,
            result
        }
    }
}

</script>

<style scoped>



</style>