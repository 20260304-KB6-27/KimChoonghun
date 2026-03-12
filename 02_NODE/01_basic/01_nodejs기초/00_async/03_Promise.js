// 로그인 API (가정)
function login(userId) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!userId) {
          reject('로그인 실패 : userid 없음');
          return;
        }
        //성공시
        console.log("로그인 성공");
        resolve({ userId: userId });
      }, 1000);
  })
}

// 사용자 정보 조회 API (가정)
function getUserInfo(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) {
        reject("사용자 정보 조회 실패 : user 없음");
        return
      }
      console.log("사용자 정보 조회 완료");
      resolve({ userId: user.userId, name: "kim" });
    }, 1000);
  });
}

// 주문 조회 API (가정)
function getOrders(user) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user) {
          reject("주문 목록 조회 실패 : user 없음");
          return;
        }
        console.log("주문 목록 조회 완료");
        resolve([{ orderId: 1 }, { orderId: 2 }]);
      }, 1000);
    }
  );
}

// 배송 조회 API (가정)
function getDelivery(order) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!order) {
          reject("배송 상태 조회 실패 : order 없음");
          return;
        }
        console.log("배송 상태 조회 완료");
        resolve({ orderId: order.orderId, status: "배송중" });
      }, 1000);
    }
  );
}

login('userid')
.then((user) => {
  //them을 이용해서 성공시 반환된 데이터 받아올 수 있음
  console.log(user)
  return getUserInfo(user);
}).then((userInfo) => {
  console.log(userInfo)
  return getOrders(userInfo)
}).then((orders) => {
  console.log(orders)
  return getDelivery(orders[0])
}).then((delivery) => {
  console.log(delivery)
})