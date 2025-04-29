import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R056_Sweetalert2Basic extends Component {
    componentDidMount() {
        //alert 동기적 동작(확인 버튼 누르지않으면 다음 작업 넘어가지 않음)
        //Swal.fire 비동기적 동작(실행시켜놓고 완료 여부에 상관없이 다음 코드 진행
        
        //Swal.fire('1. SweetAlert')
        //alert('2. alert()')
        Swal.fire('1. SweetAlert').then(result =>
        { alert('2. result.value : '+result.value) }
        )
    }

    render() {
        return (
            <h1>sweetalert2</h1>
        )
    }
}

export default R056_Sweetalert2Basic;