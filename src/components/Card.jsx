import React from "react";
import { Link } from "react-router-dom";

export default function Card({ userId, name, count }) {
  return (
    <Link to={`/album/${userId}`}>
      <li data-badge={count}>{`${name} ${userId}`}</li>
    </Link>
  );
}
