import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

function App() {
  return (
    <>
      <Input variant="contained" color="primary" type="file">
        Test
      </Input>
      <br />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Upload
      </Button>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
