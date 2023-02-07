import React from 'react';

//export default function ProfileCard(props) {
export default function ProfileCard({name, imageSource}) {//with object destructuring
  //const name = props.name;
  //const imageSource = props.imageSource;

  //const {name, imageSource}= props; //with object destructuring

  return (
    <div>
      <h1>{name}</h1>
      <img  height="100px"
        src={imageSource}
        alt="logo"
      ></img>
    </div>
  );
}
