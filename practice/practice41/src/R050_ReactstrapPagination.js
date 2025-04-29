import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//데이터 수가 많아 한 페이지에 모두 표시할 수 없을 때는 여러 페이지에 나눠 표시한다
//Pagination 패키지는 페이지 번호, 이전/다음페이지, 첫/마지막페이지 버튼을 쉽게 구현할 수 있다.

class R050_ReactstrapPagination extends Component {
    //페이지 버튼 클릭 시 파라미터에 따라 알림 창을 표시
    pagination = (type) => {
        alert("Go "+type)
    }

    render() {
        return (
            <>
                {/* 속성 값 first, previous, next, last를 추가해 표현할 수 있다.
                onClick 이벤트를 추가하면 
                함수를 실행해 이동할 페이지 정보를 파라미터로 받음 */}
                <Pagination size="lg" aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("previous")} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.pagination("1")}>1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.pagination("2")}>2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={e => this.pagination("last")} />
                    </PaginationItem>
                </Pagination>
            </>
        )
    }
}

export default R050_ReactstrapPagination;