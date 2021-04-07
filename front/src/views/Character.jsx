import React from "react";
import Loading from "./Loading";
export default function Character({ avatar, setSlide, setActiveStep }) {
  const [loading, setLoading] = React.useState(false);

  function delay(t) {
    return new Promise(function () {
      setTimeout(() => {
        setLoading(false);
        setSlide((prevActiveStep) => prevActiveStep + 1);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }, t);
    });
  }
  let Loader = () => {
    setLoading(true);
    delay(1000);
  };
  React.useEffect(() => {}, [loading]);
  return (
    <div className="container5">
      {!loading ? (
        <div className="avatarsContainers">
          <div className="avatar">
            <button className="buttonAvatar">
              <img
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image21.jpg"
                onClick={(e) => {
                  avatar(e.currentTarget.src);
                  Loader();
                }}
              />
            </button>
          </div>
          <div className="avatar">
            <button className="buttonAvatar">
              <img
                src="https://i.pinimg.com/originals/8b/b3/81/8bb381d706687cc527e9dfc72db4f995.jpg"
                onClick={(e) => {
                  avatar(e.currentTarget.src);
                  Loader();
                }}
              />
            </button>
          </div>
          <div className="avatar">
            <button className="buttonAvatar">
              <img
                src="https://i.pinimg.com/originals/8b/b3/81/8bb381d706687cc527e9dfc72db4f995.jpg"
                onClick={(e) => {
                  avatar(e.currentTarget.src);
                  Loader();
                }}
              />
            </button>
          </div>
          <div className="avatar">
            <button className="buttonAvatar">
              <img
                src="https://avatarfiles.alphacoders.com/197/197606.png"
                onClick={(e) => {
                  avatar(e.currentTarget.src);
                  Loader();
                }}
              />
            </button>
          </div>
          <div className="avatar">
            <button className="buttonAvatar">
              <img
                src="https://i.pinimg.com/originals/8b/b3/81/8bb381d706687cc527e9dfc72db4f995.jpg"
                onClick={(e) => {
                  avatar(e.currentTarget.src);
                  Loader();
                }}
              />
            </button>
          </div>
          <div className="avatar">
            <button className="buttonAvatar">
              <img
                src="https://i.pinimg.com/originals/8b/b3/81/8bb381d706687cc527e9dfc72db4f995.jpg"
                onClick={(e) => {
                  avatar(e.currentTarget.src);
                  Loader();
                }}
              />
            </button>
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

//ponerle un texto a esta cosa que diga selec you avatar
