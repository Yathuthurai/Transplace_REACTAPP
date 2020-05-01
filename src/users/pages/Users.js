import React from "react";

import UsersList from "../components/UsersList";


const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Harry Potter",
      image:
        "https://www.aboutmanchester.co.uk/wp-content/uploads/2016/07/img_9711.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Thurai Yathu",
      image:
        "https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-0/p640x640/60342850_1599040266894543_5265104505841647616_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_oc=AQkQF8c5hJJQcbHPllHlco9WX1qzfTXKKXQ2vYF46MARNPy07s3ANcyp8COKKs29-r8&_nc_ht=scontent.fcmb5-1.fna&_nc_tp=6&oh=28ae10fcb7474d703ccf35ab4bf27bc4&oe=5EC1CA68",
      places: 5,
    },
    {
      id: "u3",
      name: "Hermaine",
      image:
        "https://i.pinimg.com/originals/8b/1a/73/8b1a7396a3ffa50b006a9338508540a7.jpg",
      places: 7,
    },
    {
      id: "u4",
      name: "Ron Wiesly",
      image:
        "https://media1.popsugar-assets.com/files/thumbor/jHnKAxGaEis0BvaPdbt07GFQrG8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2010/11/45/3/258/2589278/993f987189e523c9_9/i/Playing-Laughs.jpg",
      places: 4,
    }


  ];
  return (
    <UsersList items={USERS} />
  );
};

export default Users;
