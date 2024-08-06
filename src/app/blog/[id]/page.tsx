import React from "react";
import BlogTemplate from "../_components/blog-template";

type BlogContent = {
  type: "text" | "image";
  content: string;
};

interface BlogProps {
  title: string;
  content: BlogContent[];
}

const blogData: BlogProps[] = [
  {
    title: "Asahidake Ropeway, deepest snow of Hokkaido?",
    content: [
      {
        type: "text",
        content:
          "Asahidake is the highest peak of Hokkaido with 2290m, and it's and active volcano. At its foot lies the Asahidake Ropeway, becoming one of the best highlights of the Hokkaido powder hunters.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-0/PXL_20240104_063155802.jpg",
      },
      {
        type: "text",
        content:
          "It's a Ropeway that saves you 650m vertical. And accés you to a Plato where you can contemplate, the beauty of the volcano with it's smoky fumaroles making you feel small and in a living earth. Either climb to the top or loop the Ropeway in search of the deepest of deepest snows will end in an unforgettable day out! The fact that the base of the ropeway lays on a 1000m elevation, which is very high for Hokkaido basis give to it extremely unic snow conditions.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-0/IMG-20240104-WA0015.jpg",
      },
      {
        type: "text",
        content:
          "Ski terrain under the Ropeway is quite easy to guess on a sunny day, but those deep stormy days when the snow it's fresh at its prime the terrain can become more difficult to acknowledge and dangerous. Going for the summit even though it may look reasonable can become more difficult than expected. Its freezing temperatures and high speed wind plus a very unpredictable weather make it for a non mistake mission. Say all that if we are able to enjoy the sunset from the crater we may say it is our best ski day in our life's. All in all we highly recommend to contract well educate and wise terrain knowledge ski guide to make the experience a pleasure at its fullest.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-0/IMG_20240106_230353_471.jpg",
      },
    ],
  },
  {
    title: "Aymar Navarro & Leo Slemett visit Hokkaido and Yukiumi house",
    content: [
      {
        type: "image",
        content: "/images/blogs/blog-1/team_firmas.jpg",
      },
      {
        type: "text",
        content:
          "Aymar Navarro, Spanish freeride legend and freeride world tour competitor for many years convinced his best Chamonix ski buddy Leo Slemett, Freeride world tour champion to go check the famous snow of Central Hokkaido on January 2024. They choose  Yukiumi house to stay, get the best food and be shown around. ",
      },
      {
        type: "image",
        content: "/images/blogs/blog-1/PXL_20240109_040435195.jpg",
      },
      {
        type: "text",
        content:
          "They stayed in Furano valley for 10 days of endless Powder snow. They came to shoot a short film project with their cameraman Jaime Varela an authentic machine in his field.",
      },
      {
        type: "text",
        content:
          "They got epic conditions with more than 2 meters of snow fallen in those two days. They could ski typical central Hokkaido terrain, tide trees, avy barriers, active volcanoes like Asahidake and all in all with the sublime powder snow that this region of the planet gets.",
      },

      {
        type: "image",
        content: "/images/blogs/blog-1/PXL_20240109_012814504.jpg",
      },
      {
        type: "text",
        content:
          "We were beyond stoked to have them and offer our very best product to them. We squeeze all we have, cook our best food, take them to the best ski spots and show the best of Japanese culture has to offer, like food and onsens. Overall, them and us cultivate a short but intense relationship that we all remember with pride as everyone had the feeling that everything went much better and smoother than specter. For those 10 days we all become a freeride Family and we all learn from each other. We would love to have them back anytime to keep improving our riding skills and learning from the best. We can be more thankful for the opportunity they gave us to have them home. Cheers to those dream days riding with our heros🤟🫶",
      },
      {
        type: "image",
        content: "/images/blogs/blog-1/PXL_20240113_034726830.jpg",
      },
    ],
  },
  {
    title: "Ski mountaineering in Rishiri",
    content: [
      {
        type: "image",
        content: "/images/blogs/blog-2/island.jpg",
      },
      {
        type: "text",
        content:
          "Since we arrived in Japan and before we knew about the existence of Rishiri Fuji. The lonely island, the pointing volcano that rises 1721 m above the sea. Located in the most north side of Japan is a difficult access place, where you could go to it from Wakkanain port with the ferry that every day goes twice. The most challenging part is to spot the correct weather window. It's location is very prompt to be all time under storms. Once you get your weather window pretty clear, the best is to commit and head up north. ",
      },
      {
        type: "text",
        content:
          "Once you are on the island there are very few places to host yourself and most montanierus people will decide to camp or viuvac before climbing it. A long climb ahead from 0 to 1721m.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-2/PXL_20240321_050510665.jpg",
      },
      {
        type: "text",
        content:
          "Early start and maybe for most skiers the normal route through the north ridge would be the easiest. Middle way there is this little hut where you can shelter, or overnight depending on your necessities and activities plan.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-2/PXL_20240322_023509564.jpg",
      },
      {
        type: "text",
        content:
          "About skiing there are plenty of possibilities and the summit will become secondary if we prioritize ski! The famous Aftaromamai is the line that links all the east face from top to bottom Then in the West we have a more safe talking gully/face that usually is not super loaded. Though nothing or NE there are some hidden gems with just pleasant ski on it pretty much full of pow. Finally on the south side of the island for those early months. Probably well loaded after any nothly storm.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-2/PXL_20240322_024047477.jpg",
      },
      {
        type: "text",
        content:
          "Any time of the winter is special there, but the most recommended time is about mid to late March. Each time we head there we feel like we would like to spend more and more time on the Island. Let's hope for more!!!",
      },
    ],
  },
  {
    title: "Kurodake Ropeway Hokkaido's freeride Paradise:",
    content: [
      {
        type: "text",
        content:
          "Kurodake Ropeway is one of the best ski attractions Hokkaido has to offer. For the lovers of steep, fast skiing and deep alpine powder. ",
      },
      {
        type: "image",
        content: "/images/blogs/blog-3/IMG_20240101_215715_233.jpg",
      },
      {
        type: "text",
        content:
          "Kurodake Ropeway is located in the Sounkyo gorge. On the foot of Kurodake mountain and already inside of the Disetsuzan national Park. It's a funicular tram that saves about 750m  plus one little chairlift on the top that saves 200m extra. From there we can start skiing and hiking to some of the best lines of Hokkaido.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-3/IMG-20240305-WA0010.jpg",
      },
      {
        type: "text",
        content:
          "The terrain we can expect there is a very narrow and steep treeline, where only highly advanced skiers will feel comfortable with. Then higher in the alpine above the treeline we find wide open steep faces, shoots and deep gullies that will make us think we are not in Hokkaido anymore. Nonetheless it's always well filled with that dry, light and deep Central Hokkaido powder snow.",
      },
      {
        type: "image",
        content: "/images/blogs/blog-3/JMT_20230226_3400.jpg",
      },
      {
        type: "text",
        content:
          "It's best moment of the season is from mid February to mid April providing a very long season to ride.",
      },
    ],
  },
];

export default function Page({ params }: { params: { id: number } }) {
  if (params.id >= blogData.length) {
    return (
      <h1 className="my-20 font-bold text-2xl text-center">Blog not found</h1>
    );
  }
  return (
    <div>
      <BlogTemplate
        title={blogData[params.id].title}
        content={blogData[params.id].content}
      />
    </div>
  );
}
