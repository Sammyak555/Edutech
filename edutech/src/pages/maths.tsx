import React from "react";
import Singlesubject from "../components/Singlesubject";

import { Image } from "@chakra-ui/react";

type obj = {
  title: string;
  image: string;
  drivelink: string;
  subject: string;
  description: string;
};
export async function getServerSideProps() {
  let res = await fetch("http://localhost:4002/books?subject=MATH");
  let data = await res.json();
  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
}

export default function maths(data: any) {
  const arrdata = data.data;
  console.log(arrdata);

  return (
    <div className="maths-page">
      <div className="math-comp">
        <div className="subject-heading">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/9482/9482513.png"
            alt=""
          />
          <h1>ＭＡＴＨＥＭＡＴＩＣＳ</h1>
        </div>

        <div className="math-topics">
          {arrdata &&
            arrdata.map((el: obj, i: number) => {
              return <Singlesubject key={i} {...el} />;
            })}
        </div>
      </div>
    </div>
  );
}
