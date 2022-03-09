//const는 상수라는 뜻. 값을 바꿀 수 없음 반면, let은 업데이트 가능 never var...
//undefined : 메모리는 할당되어 있지만 값은 없는 상태
//null은 변수 안에 값이 없음을 의도적으로 표현한 상태
//object로 선언된 const는 객체 안의 정보를 수정하는 것이기 때문에 변수 업데이트가 가능하다
const player = {
    name:"nico",
    points:10,
    fat:true,
    sayHello: function () {
        console.log("Hello" + this.name);
    },
};

console.log(player.name);
player.lastName = "potato";
player.sayHello();
console.log(parseInt("Hello"));
