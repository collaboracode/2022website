import React from "react";
import { Stack, Form, Button } from "react-bootstrap";

//documentation here: https://react-bootstrap.github.io/layout/stack/

export default function FluidContainer() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="btn btn-primary btn-lg">Submit</Button>
      
        <div class="vr"></div>
      
      <Button variant="btn btn-danger">Reset</Button>
    </Stack>
  );
}
