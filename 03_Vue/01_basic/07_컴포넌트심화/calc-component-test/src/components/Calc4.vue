<template>
    <div>
        X : <input type="text" v-model.number="state.x"/><br/>
        Y : <input type="text" v-model.number="state.y"/><br/>
    </div>
    <!-- <button @click="calcAdd">계산</button> -->
    <div>결과 : {{ result }}</div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
    name: "Calc4",

    setup() {
        // 객체를 반응형으로 반환
        const state = reactive({
            x: 10,
            y: 10,
        })

        // computed : 의존하는 반응형 데이터가 변경될때만 자동으로 계산
        const result = computed(() => {
            return state.x + state.y
        });

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
            // toRefs : reactive 객체의 각 속성을 개별 ref로 반환
            state,
            // state,
            result
        }
    }
}

</script>

<style scoped>



</style>