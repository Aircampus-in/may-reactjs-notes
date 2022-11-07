import React from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./counter.css";

export function Counter() {
  return (
    <>
      <Button type="ghost" size="small">
        <PlayCircleOutlined /> test button
      </Button>
      <h2>Air campus</h2>
      <h3>react testing class</h3>
      <p title="vasanth">good night. thank you</p>
      <img src="" alt="picture" />
      <div data-testid="custom"></div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="firstName"
            value={"vasanth"}
          />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <textarea id="age"></textarea>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select defaultValue={"uk"} id="location">
            <option value="us">US</option>
            <option value="uk">UK</option>
            <option value="ind">India</option>
            <option value="rsa">Russia</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the above terms
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
