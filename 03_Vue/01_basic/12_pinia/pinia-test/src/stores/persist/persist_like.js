import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLikePersistStore = defineStore('like-persist', () => {

    // state
    const like = ref(0);

    // getter
    // 여러 컴포넌트에서 사용하는(공유되는) 계산 값
    const fiveTime = computed(() => like.value * 5)

    // actions
    const increment = () => {
        like.value++;
    };

    return { like, increment, fiveTime };
},
{ 
    persist : {
        key: 'like-p', // storage에 저장될 key 이름 (기본 값 store Id)
        storage: sessionStorage, // 기본값 : localStorage
        pick: ['like'], // 저장하고 싶은 상태값 지정 가능
    }
}
)