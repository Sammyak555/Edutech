import React from "react";
import Singlesubject from "../components/Singlesubject";

import { Image } from "@chakra-ui/react";
import Chat from "@/components/Chat";

type obj = {
  title: string;
  image: string;
  drivelink: string;
  subject: string;
  description: string;
};
export async function getServerSideProps() {
  let res = await fetch(
    "https://learn-grow-backend.vercel.app/books?subject=Science"
  );
  let data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

const science = (data: any) => {
  const arrdata = data.data;
  console.log(arrdata);

  return (
    <div className="maths-page">
      <div className="math-comp">
        <div className="subject-heading">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/2022/2022299.png"
            alt=""
          />
          <h1>ＳＣＩＥＮＣＥ</h1>
        </div>
        <div className="math-topics">
          {arrdata &&
            arrdata.map((el: obj, i: number) => {
              return <Singlesubject key={i} {...el} />;
            })}
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default science;
