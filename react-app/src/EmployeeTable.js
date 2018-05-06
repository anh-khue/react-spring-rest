import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';

class EmployeeTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/employees`)
            .then(res => {
                const employees = res.data;
                this.setState({employees});
            });
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(employee =>
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.firstName} {employee.lastName}</td>
                                <td>{employee.company}</td>
                                <td>{employee.position}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default EmployeeTable;