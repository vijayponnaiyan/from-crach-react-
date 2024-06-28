import React from "react";
import ReactDOM from "react-dom/client";

const Title = (
  <h1 id="title" key="h1">
    Food Valli React
  </h1>
);

const Header = () => {
  return (
    <>
      <div className="APP_header">
        {Title} 
        <div className="iteam_alin">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Card</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const restranlist = {
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          imageGridCards: {
            info: [
              {
                id: "750131",
                imageId:
                  "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                action: {
                  text: "Dosa",
                },
              },
              {
                id: "750643",
                imageId:
                  "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                action: {
                  text: "Idli",
                },
              },
              {
                id: "750242",
                imageId:
                  "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Puttu.png",
                action: {
                  text: "Puttu",
                },
              },
              {
                id: "749805",
                imageId:
                  "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png",
                action: {
                  text: "Appam",
                },
              },
              {
                id: "750197",
                imageId:
                  "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Pancake.png",
                action: {
                  text: "Pancakes",
                },
              },
              {
                id: "749786",
                imageId:
                  "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png",
                action: {
                  text: "Omelette",
                },
              },
              {
                id: "749816",
                imageId:
                  "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Bath.png",
                action: {
                  text: "Bath",
                },
              },
              {
                id: "750234",
                imageId:
                  "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                action: {
                  text: "Poori",
                },
              },
              {
                id: "750201",
                imageId:
                  "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                action: {
                  text: "Paratha",
                },
              },
              {
                id: "750561",
                imageId:
                  "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                action: {
                  text: "Vada",
                },
              },
            ],
          },
        },
      },
    ],
  },
};

const ReasturanCard = ({ image, name }) => {
  return (
    <div className="card">
      <img width={250} src={image} alt={name} />
      <h2>{name}</h2>
      <h3>Restaurant Description</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  const restaurantCards = restranlist.data.cards[0].card.imageGridCards.info.map(
    (restaurant) => {
      return (
        <ReasturanCard
          key={restaurant.id}
          image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.imageId}`}
          name={restaurant.action.text}
        />
      );
    }
  );

  return <div className="focus">{restaurantCards}</div>;
};

const Fooder = () => {
  return (
    <>
      <div>
        <h1>Fooder</h1>
      </div>
    </>
  );
};

const App_layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Fooder />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App_layout />);
