import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterPersistStore = defineStore('persist-counter', () => {
    // state
    const count = ref(0);
    // getters 
    const doubleCount = computed(() => count.value * 2)
    // actions
    function increment() {
        count.value++;
    }

    function reset() {
        count.value = 0; // 초기화
    }

    return { count, doubleCount, increment, reset }
    },
    {
        persist: true //localstorage에 자동 저장, 복원
    }
)
