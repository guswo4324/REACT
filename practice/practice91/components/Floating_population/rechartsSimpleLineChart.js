import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    { 군구: '광진구', 유동인구수: 32760, 비유동인구수:34000 },
    { 군구: '동대문구', 유동인구수: 30480, 비유동인구수:56000 },
    { 군구: '마포구', 유동인구수: 27250, 비유동인구수:23000 },
    { 군구: '구로구', 유동인구수: 49870, 비유동인구수:67000 },
    { 군구: '강남구', 유동인구수: 51420, 비유동인구수:55000 },
];

export default class rechartsSimpleLineChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        return (
            <LineChart
            // 창트 영역 설정
                width={1000}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5}}
            >
                {/* 차트 내부에 표시되는 격자선 조정 */}
                <CartesianGrid strokeDasharray="3 3" />
                {/* data 변수에 할당한 데이터 중 X축에 사용할 데이터의 Key값 지정 */}
                <XAxis datakey="군구" /><YAxis/>
                {/* 마우스가 차트로 이동했을 때 이동한 좌표의 데이터를 화면에 나타냄 */}
                <Tooltip />
                {/* 차트 하단 범례를 영역에 표시 */}
                <Legend />
                {/* Y축에 표현될 데이터 Key 값과 라인색을 지정
                activeDot의 r값은 마우스 커서가 차트로 이동했을 때 
                나타나는 색이 채워지는 동그라미의 크기 */}
                <Line type="monotone" dataKey="유동인구수" stroke="#8884d8" activeDot={{ r:8 }} />
                <Line type="monotone" dataKey="비유동인구수" stroke="#82ca9d" />
            </LineChart>
        );
    }
}
