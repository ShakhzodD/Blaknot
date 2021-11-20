import React, { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <h1 onClick={() => setMenu(!menu)}>ABS</h1>
      <div className={`header h123 ${menu ? "h12" : null}`}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fuga
          molestiae quo, quis necessitatibus porro reiciendis nostrum dicta,
          esse nihil, atque voluptas. Cumque perferendis totam aut, eaque
          quibusdam pariatur mollitia.
        </p>
      </div>
    </div>
  );
}
