<template>
    <div class="container">
        <div class="text-center my-4 items-align-center">
            <button class="btn btn-primary" @click="prevMonth">←</button>
            <span class="mx-2">
                {{ today.getFullYear() }} {{ today.getMonth()+1 }}
            </span>
            <button class="btn btn-primary" @click="nextMonth">→</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th id="sun">일</th>
                    <th id="mon">월</th>
                    <th id="tue">화</th>
                    <th id="wed">수</th>
                    <th id="thu">목</th>
                    <th id="fri">금</th>
                    <th id="sat">토</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="week in nowCalendar">
                    <td v-for="day in week" 
                    v-if="week.reduce((acc,cur) => acc+cur, 0) > 0" 
                    class="day"
                    :class="{ 'isToday': today.getDate() == day }"
                    @click="changeDay(day)"
                    >{{ day == 0 ? '-' : day}}
                    </td>
                </tr>
            </tbody>    
        </table>
    </div>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import { ref, onMounted, computed } from 'vue';
    const route = useRoute();   
    const today = ref(new Date());
    const nowMonth = ref(new Date(today.value.getFullYear(), today.value.getMonth(), 1));
    const edMonth = ref(new Date(today.value.getFullYear(), today.value.getMonth()+1, 0));
    const calendar = ref(
        [[0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],]
    )

    const nowCalendar = computed(() => {
        nowMonth.value = new Date(today.value.getFullYear(), today.value.getMonth(), 1);
        edMonth.value = new Date(today.value.getFullYear(), today.value.getMonth()+1, 0);
        const stDate = nowMonth.value.getDay()
        const edDate = edMonth.value.getDay()
        let temp = stDate;
        let ind = 0
        calendar.value = [[0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],]
        for (var i = 1; i <= edMonth.value.getDate(); i++) {
            calendar.value[ind][temp] = i;
            temp++;
            if (temp > 6) {
                ind += 1
                temp = 0
            }
        }
        return calendar.value
    })
    

    const prevMonth = () => {
        today.value = new Date(today.value.getFullYear(), today.value.getMonth(), 0);
    }

    const nextMonth = () => {
        today.value = new Date(today.value.getFullYear(), today.value.getMonth()+2, 0);
    }

    const changeDay = (day) => {
        if (1 <= day && day <= 31)
            today.value = new Date(today.value.getFullYear(), today.value.getMonth(), day);
    }
</script>
<style>
    #sun { color: red }
    #sat { color: blue }
    .day:hover {
        font-weight: bold;
        background-color: rgb(255,244,244);
        cursor: pointer;
        transition: background-color 0.5s ease;
    }
    .isToday { font-weight: bold; background-color: rgb(255,244,244) !important;}
</style>