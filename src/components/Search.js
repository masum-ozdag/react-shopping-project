import React from "react";
import { Input } from "reactstrap";

export default function Search({ handleSearch }) {
  return (
    <div>
      <Input placeholder="Search..." name="search" onChange={handleSearch} />
    </div>
  );
}
