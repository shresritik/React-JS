import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function SearchBox() {
  const [keyword, setKeyword] = useState("");
  let history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      // if keyword is set in search box then send it to homescreen with ?keyword which acts as get request in backend
      // &page is added to search inside the paginator, data from 'page' is sent to backend
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      // if search button is pressed in another screen then donot let to route to homescreen
      history.push(history.location.pathname);
    }
  };
  return (
    <Form onSubmit={submitHandler} className=" d-flex">
      <Form.Control
        type="text"
        name="q"
        placeholder="Search for a Product"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 mx-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
