import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class TodoForm extends Component {

  render() {

    const { todo, handleTodo, submit, selected, nameRef, validated } =
      this.props;

    return (
      <Form validated = {validated} noValidate className="w-50 mx-auto mt-4" onSubmit={submit}>
        <Form.Group controlId="name">
          <Form.Label>Todo name</Form.Label>
          <Form.Control require type="text" value={todo.name} onChange={handleTodo} ref={nameRef}/>
        </Form.Group>

        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>

        <Form.Group controlId="data" className="mb-3">
          <Form.Label>Todo date</Form.Label>
          <Form.Control onChange={handleTodo} value={todo.date} require type="date" />
        </Form.Group>

        <Form.Group controlId="Importance">
          <Form.Label>Importance</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="high">High</option>
            <option value="middle">Middle</option>
            <option value="low">Low</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="w-100">
          {selected === null ? 'Add' : 'Save'}
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
