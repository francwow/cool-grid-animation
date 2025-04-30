import Image from "next/image";
import "./slide-show.css";
import { gridItems } from "@/app/data/gridItems";
import { useEffect, useState } from "react";

type SlideShowProps = {
  id: number;
};

const SlideShow = ({ id }: SlideShowProps) => {
  const [itemActive, setItemActive] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>();

  useEffect(() => {
    let number;

    do {
      number = Math.random();
    } while (number < 0.5);

    setRandomNumber(number);
  }, []);

  useEffect(() => {
    const increaseItem = () => {
      if (itemActive < 2) {
        setItemActive(itemActive + 1);
      } else {
        setItemActive(0);
      }
    };

    const startSlideShow = setInterval(
      increaseItem,
      randomNumber !== undefined ? randomNumber * 1000 : 500
    );

    return () => clearInterval(startSlideShow);
  }, [itemActive, randomNumber]);

  return (
    <div className="slide-show">
      {gridItems.map((item) => {
        return item.id === id ? (
          <div className="slide-show-item" key={item.id}>
            <div className={"item-modal"}>
              <p>{item.text}</p>
            </div>
            {item.type === "img" ? (
              item.items.map((item, j) => {
                return (
                  <Image
                    key={j}
                    src={item}
                    alt="img"
                    className={itemActive === j ? "item-active" : ""}
                    priority
                    width={640}
                    height={640}
                  />
                );
              })
            ) : (
              <div className="video">
                <video
                  src={`/video/${item.items[0]}.mp4`}
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            )}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SlideShow;
