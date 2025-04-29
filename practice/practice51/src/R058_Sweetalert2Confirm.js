import React, { Component } from 'react';
import Swal from 'sweetalert2';

//웹 사이트에 삭제 기능 구현할때 사용자의 실수로 데이터가 삭제될 수 있음
//이런 상황을 방지하기 위해 실제 삭제 작업을 실행하기전에 한번 더 확인하는 알림 창

class R058_Sweetalert2Confirm extends Component {
    deletAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'blue',
            confirmButtonText: '예',
            cancelButtonText: '아니오'
            //사용자 선택에 따라 then()이 실행
            //삭제를 선택했다면 result.value 값이 true로 바뀜
            //삭제 완료 창을 표시
        }).then((result) => {
            if (result.value) {
                document.getElementById('deletedId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제 완료',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <>
                <h1 id='deletedId'>sweetalert2</h1>
                <button onClick={e => this.deletAlert()}>삭제</button>
            </>
        )
    }
}

export default R058_Sweetalert2Confirm;