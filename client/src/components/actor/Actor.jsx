import axios from "axios";
import React, { useEffect, useState } from "react";
import "./actor.scss";

export default function Actor({ item }) {
  const [actor, setActor] = useState({});

  console.log(item); // item nhận dc là id
  useEffect(() => {
    const getActor = async () => {
      try {
        const res = await axios.get("/actors/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTgyNTIwNywiZXhwIjoxOTExMDI1MjA3fQ.zUnmi1ldGu_OBidqwP6V2MQc1cpCohfWySOxLIwww18",
          },
        });
        setActor(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getActor();
  }, [item]);

  return (
    <div className="actorPage">
      <div className="card">
        <div className="card-top">
          <img className="actorImg" src={actor.profilePic} alt="" />
        </div>
        <div className="card-bot">
          <span className="actorName">
            {String(actor.name).substring(0, 16)}
          </span>
        </div>
      </div>
    </div>
  );
}
