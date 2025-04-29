import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class R044_ReactstrapForm extends Component {
    render() {
        return (
            <Form>
                {/* bzSize : sm(작음) / lg(큼) */}
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="lg">
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row form>
                    {/* <Col>태그의 md 속성으로 너비값을 정할 수 있는데 한 줄에 12개의 영역으로 나뉜다
                    한 <Row> 태그에 속한 <Col>태그의 md 속성의 합이 12가 되도록 해야한다 */}
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">address</Label>
                            <Input type="text" name="address" id="address"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleMobile">mobile</Label>
                            <Input type="text" name="mobile" id="mobile"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleAge">age</Label>
                            <Input type="text" name="age" id="age"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default R044_ReactstrapForm;