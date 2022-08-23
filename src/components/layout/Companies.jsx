import React from "react";

const Companies = () => {
  return (
    <div className="p-3 mt-10">
      <div class="divider text-gray-400 uppercase">As Featured On :</div>

      <div className="companies w-full flex  items-center justify-evenly">
        <img
          className="w-1/5 transition ease-in-out duration-500"
          src="https://logos-download.com/wp-content/uploads/2016/11/Y_Combinator_logo_text_wordmark.png"
        />
        <img
          className="w-1/5 transition ease-in-out duration-500"
          src="https://logos-world.net/wp-content/uploads/2022/01/BBC-Logo.png"
        />
        <img
          className="w-1/5 transition ease-in-out duration-500"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/2560px-Forbes_logo.svg.png"
        />
        <img
          className="w-1/5 transition ease-in-out duration-500"
          src="https://images.squarespace-cdn.com/content/v1/5c8fb98baadd34339214868a/be0a714f-18cf-4c53-a172-66de0dd2df3a/Techstars.jpg"
        />
      </div>
    </div>
  );
};

export default Companies;
