import React, { Component } from 'react';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //constructor 함수가 가장 먼저 실행
            //호출된 response 값을 저장할 responseFPList 변수와 리스트 html 코드를 저장할 
            //append_FPList 변수를 state로 선언하고 공백 할당
            responseFPLIST: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    classFloatPopulListApi = async () => {
        //callFloatPopulListApi 함수가 실행되면, axios로 유동 인구 url을 호출
        //파라미터로 $count=30을 추가하면 30개의 데이터를 호출 가능
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?'+'pid=1002277&TDCAccessKey=키값&$count=30', {
        })
        .then(response => {
            try {
                // axios 호출로 반환된 response 데이터를 state 변수 responseFPList에 할당
                this.setState({ responseFPList: response });
                this.setState({
                    //FloatPopulListAppend 함수 호출
                    //return result로 return된 행들(<tr> 태그 묶음)을 append_FPList에 할당
                    //이때 setState 함수가 실행되면서 render함수가 다시 한번 호출
                    append_FPList: this.FloatPopulListAppend() });
                } catch (error) {
                    alert(error)
                }
        })
        .catch( error => { alert(error); return false;} );
    }

    FloatPopuListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        //FloatPopulListAppend 함수가 호출되면, 
        //responseFPList 변수에 할당했던 json 형태의 데이터 불러옴
        //json 데이터를 string을 변환해 불필요한 텍스트를 공백으로 replace함
        var jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(1시간 단위\)/g, '')
        jsonString = jsonString.replace(/\(10세 단위\)/g, '')
        var json = JSON.parse(jsonString)

        //json 데이터에서 실제 사용할 데이터가 포함된 entry object에 접근
        //json 데이터를 순서대로 가져온 후 <tr>, <td> 태그로 감싸 테이블의 한 행을 만들어줌
        //행을 하나 생성할 때마다 (let result = [])result 배열에 push 문법으로 삽입
        //반복문으로 모든 행을 result 배열에 넣고 반환
        for(let i=0; i<json.entry.length; i++) {
            var data = json.entry[i]
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.일자}</td>
                    <td>{data.시간}</td>
                    <td>{data.연령대}</td>
                    <td>{data.성별}</td>
                    <td>{data.시}</td>
                    <td>{data.군구}</td>
                    <td>{data.유동인구수}</td>
                </tr>
            )
        }
        return result
    }
    render() {
        return (
            <table class="table_ty2 fp_tlist">
                {/* 최초 실행 시 append_FPList는 공백으로 빈테이블 상태 */}
                {/* render함수가 다시 실행될 시점에 
                append_FPList에 할당된 html 코드 (<tr> 태그 묶음)이 화면에 표시 */}
                {this.state.append_FPList}
            </table>
            // <div>
            //     <table class="table_ty1 fp_tlist">
            //         <tr>
            //             <th>Row</th>
            //             <th>일자</th>
            //             <th>시간</th>
            //             <th>연령대</th>
            //             <th>성별</th>
            //             <th>시</th>
            //             <th>군구</th>
            //             <th>유동 인구 수</th>
            //         </tr>
            //     </table>
            //     <table class="table_ty2 fp_tlist">
            //         <tr class="hidden_type">
            //             <td>1</td>
            //             <td>20191101</td>
            //             <td>00</td>
            //             <td>40</td>
            //             <td>여성</td>
            //             <td>서울</td>
            //             <td>영등포구</td>
            //             <td>32670</td>
            //         </tr>
            //         <tr class="hidden_type">
            //             <td>1</td>
            //             <td>20191101</td>
            //             <td>00</td>
            //             <td>50</td>
            //             <td>남성</td>
            //             <td>서울</td>
            //             <td>구로구</td>
            //             <td>27888</td>
            //         </tr>
            //     </table>
            // </div>
        )
    }
}

export default floatingPopulationList;