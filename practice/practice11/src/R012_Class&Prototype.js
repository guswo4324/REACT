import React, { Component } from 'react';

class ClassPrototype extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //ES5 prototype
        var ExamCountFunc = (function () {
            // 2. 생성자 함수를 실행하는데, 파라미터롤 전달받은 num값 200을 객체 변수 number에 저장
            function ExamCount(num) {
                this.number = num;
            }
            // 3. 생성자 함수명 .prototype. 형태로 선언해주면 객체 외부에서 함수(cnt.showNum();)를 실행
            // 객체 내부에 선언된 함수로 사용할 수 있다. 
            // 함수가 실행되면 생성자 함수에서 200으로 할당된 객체 변수 number를 사용
            ExamCount.prototype.showNum = function () {
                console.log('1.react_' +this.number);
            };
            return ExamCount;
        }());

        // 1. ExamCountFunc() 객체를 실행한 후  return되는 결과값을 cnt라는 변수에 저장
        var cnt = new ExamCountFunc('200');
        cnt.showNum();

        //ES6 class
        // 5. ES6에서는 객체를 class로 선언
        class ExamCountClass {
            // 6. constructor() 라는 생성자 함수가 실행되고 
            // 파라미터로 전달받은 num2라는 변숫값(2hundred)을 객체 변수 number2에 저장
            constructor(num2) {
                this.number2 = num2;
            }
            // 8. 생성자 함수에서 2hundred로 할당된 객체 변수 number2를 사용
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }
        // 4. ExamCountClass 객체를 생성한 후 객체를 cnt2라는 변수에 저장
        var cnt2 = new ExamCountClass('2hundred');
        // 7. 객체 안에 선언된 showNum() 함수 실행
        cnt2.showNum();
    }

    render() {
        return (
            <h2>[THIS IS Class]</h2>
        )
    }
}

export default ClassPrototype;