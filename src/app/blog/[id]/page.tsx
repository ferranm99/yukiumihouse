import React from "react";
import BlogTemplate from "../_components/blog-template";

type BlogContent = {
  type: "text" | "image" | "video";
  content: string;
  alt?: string;
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
          "Kurodake Ropeway is one of the best ski attractions Hokkaido has to offer. For the lovers of steep, fast skiing and deep alpine powder.",
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
  {
    title: "5 days Daisetsu san traverse",
    content: [
      {
        type: "text",
        content:
          "We decided to join our Japanese friends in the traverse south to north of the Daisetsuzan National Park!",
      },
      {
        type: "text",
        content:
          "We packed our big backpacks with food, fuel, and sleeping gear to be able to be self-sufficient for at least 6 days out in the mountains. Backpacks were heavy!! But our stoke was higher.",
      },
      {
        type: "video",
        content:
          "https://www.youtube.com/embed/enBzU_094n0?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent",
      },

      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_20230326_103520.jpg",
      },
      {
        type: "text",
        content:
          "Day1#: We start in Fukiage onsen, with quite a clear cold day, knowing that a big storm would be hitting the island on that same night. Went up to the coll, struggling with mega ice conditions and heavy loads. Once in the ridge line storm was already beginning an white out and strong winds was the ‘’kanji’’. Made it to the pic of Tokachidake, clinking on skis and starting a long travers on the ridge line. Riding on the hardest ice of the season with no visibility having to guess with GPS where to go was sketchy fun. Finally we got to the point where we dropped down off the ridge line and went down the south face of Bieidake. Time to build a shelter to sleep that stormy night. Was already snowing and we built a fast half cave half iglu, with a branched and leaves roof. Made a boom fire, cheered with the friends for the good times and set up our beds for sleep.",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_20230326_164710.jpg",
      },
      {
        type: "text",
        content:
          "Day2#: We woke up mega wet and full of snow as the shelter we built was not strong enough for a super windy and snowy night. Wet for the rest of the trip!! The weather was super raff and the group decided to build proper snow caves on the same spot overnight one more time. More than half a day of digging and the coolest snow cave I ever saw was made with 3 different rooms for two people, each room interconnected. Time to rest, cook and try to dry out our gear as much as possible. Hot Pocari sweat with whiskey was the recipe of the day.",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/kimg4961.jpg",
      },
      {
        type: "text",
        content:
          "Day3#: Trying to wake up like the Japanese Team….. Couldn’t make it on time but not too late. Heading out of the cave at 5:30 seeing the sunrise straight away. A long day ahead. Passing Oputateshike through the bottom, seeing great conditions in the south and east faces, deciding not to ride as we were one day late because of the big storm stuck us for an entire day. The goal was Tomuraushi standing more than 15km away. After millions of transitions, some ice, some not bad small faces we arrive at Tomuraushi North face. Some members of the group were totally exhausted, calling for a rescue and giving up mindset. Time to dig, a new snow cave was the option for the night. Putting in 2 hours of work we dug out a super fancy snow cave with a room of 4 for the Japanese team and a suit room for 2 Spanish members:)",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_20230328_161552.jpg",
      },
      {
        type: "text",
        content:
          "Day4#: The long flat!!.... A beautiful sunrise and a long day of 18 kms was ahead the stoke was high and very good weather was by our side. Leaving on the back the beautiful East face of Tomuraushi and heading to Hakun hut. Getting there for one of the most beautiful sunsets and having the pleasure of sleeping in a dry, clean and semi warm place, was so luxurious!! All the food lest was on for a great dinner and good sleep.",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4103.jpg?w=1024",
      },
      {
        type: "text",
        content:
          "Day5#: Tadaima, The feeling of coming back home. We know we did it!! The big job was done. Get out of the hut before first lights and get to the ridge line with the pink hour to be hit by the first sun rays of the day, so magic, another type of energy and vibration was there:). We were at Kurodake summit before the ropeway operated and being able to ski the main face in this type of old pow snow made our day even better. For sure we decided to ski down to Sounkyo with super ice and a difficult crust to finish one of the best activities of this winter.",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg",
      },
      {
        type: "text",
        content: "Cheers to all friends that where there was one to remember!!",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4226.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4214.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4139.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4103.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4028.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4040.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_2549.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4247-2.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/kimg4943.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/dji_0060.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/img_4063.jpg",
      },
    ],
  },
  {
    title: "Ishimuro hut mission",
    content: [
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg",
      },
      {
        type: "text",
        content:
          "Early season (7-9/11/22) conditions where looking on point up high in Daisetzuzan Naional Park. Super hungry for drawing the first turns we set up ourselves and head to Ishimuro mountain hut…. Kamui no mintara blessed us!!",
      },
      {
        type: "text",
        content: "Arigato gozaimasu:)",
      },
      {
        type: "video",
        content:
          "https://www.youtube.com/embed/Xbs0vvkHWVs?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/dsc_4408-1.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/dsc_4466-2.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/dsc_4472.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-14-04h41m48s319-9.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/dsc_4396.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/dsc_4401.jpg",
      },
    ],
  },
  {
    title: "Behind the mountains: Point of view",
    content: [
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg",
      },
      {
        type: "text",
        content:
          "This short film is an introduction of Yukiumi House, here in north Daisetsuzan, Hokkaido. We have been working hard for the last two years to put together many things. We built up a Hostel, we explored Daisetsuzan on all its beauty and in the meanwhile we got to eat many Ramens. We are hoping you all can come to visit us so we can keep exploring and sharing with you. Sincerely, Yukiumi House team.",
      },
      {
        type: "video",
        content:
          "https://www.youtube.com/embed/fg3cpG6DTGE?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent",
      },
    ],
  },
  {
    title: "Trail running Numanodaira",
    content: [
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg",
      },
      {
        type: "text",
        content:
          "Hike from Aizankei onsen, filmed in Numanodaira, with snowed Asahidake at the background. 13/10/2022",
      },
      {
        type: "video",
        content:
          "https://www.youtube.com/embed/yiOGINmN35k?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/06/dji_0786.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/06/dji_0798.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/06/dji_0805.jpg",
      },
      {
        type: "image",
        content:
          "https://yukiumihouse.files.wordpress.com/2023/06/dji_0828-2.jpg",
      },
    ],
  },
  {
    "title": "Best Time of Year for Backcountry Skiing in Furano and Kamikawa",
    "content": [
      {
        "type": "text",
        "content": "Backcountry skiing in Furano and Kamikawa offers some of the best powder conditions in Japan, thanks to Hokkaido’s long and snow-filled winter. The timing of your trip can greatly influence the quality of snow and the overall experience, so here’s a breakdown of the best times to visit based on snow conditions and weather patterns."
      },
      {
        "type": "text",
        "content": "<br><b>December: Early Season Powder</b><br><br>In December, the winter season kicks off with the first substantial snowfall. While early season conditions can be variable, Furano and Kamikawa often receive heavy snowfalls by mid-December, blanketing the mountains in light, dry powder known as 'Japow.' This is a great time to enjoy fresh snow, but the base layer may still be building up, and some backcountry routes could be limited due to early-season coverage."
      },
      {
        "type": "text",
        "content": "<b>● Snow Conditions:</b> Fresh, but base layer still forming.<br><b>● Ideal For:</b> Early season powder seekers looking for less crowded slopes."
      },
      {
        "type": "image",
        "content": "/images/blogs/blog-8/1.jpg",
        "alt":"skier in deep powder snow"
      },
      {
        "type": "text",
        "content": "<br><b>January: Peak Powder Season</b><br><br>January is the heart of winter in Hokkaido and is known for its consistently deep powder. Siberian cold fronts deliver frequent and heavy snowfalls, resulting in some of the best skiing conditions of the season. The snow remains dry and fluffy, and the backcountry terrain becomes more accessible as the snowpack deepens. The temperatures during this month are generally very cold, often below freezing, which preserves the light powder and minimizes the risk of rain or wet snow."
      },
      {
        "type": "text",
        "content": "<b>● Snow Conditions:</b> Deep, dry, and frequent powder snow.<br><b>● Ideal For:</b> Powder enthusiasts looking for the most reliable and plentiful snow."
      },
      {
        "type": "image",
        "content": "/images/blogs/blog-8/2.jpg",
        "alt": "skier sinked until shoulders in deep snow in kamikawa backcountry"
      },
      {
        "type": "text",
        "content": "<br><b>February: Deep Snow and Stable Conditions</b><br><br>February offers similar conditions to January with deep powder and excellent skiing. However, by this time the snowpack is more established, which makes it easier to access remote backcountry areas. The temperatures remain cold, but there are more clear days, offering better visibility and pleasant weather for touring. February is considered one of the best months for backcountry skiing due to the stable snowpack, fewer weather interruptions, and the continued supply of powder."
      },
      {
        "type": "text",
        "content": "<b>● Snow Conditions:</b> Deep, stable powder with frequent fresh snow.<br><b>● Ideal For:</b> Advanced skiers seeking challenging routes and deep backcountry tours."
      },
      {
        "type": "image",
        "content": "/images/blogs/blog-8/3.jpg",
        "alt": "snowboarder making a turn covered in powder snow"
      },
      {
        "type": "text",
        "content": "<br><b>March: Warmer Days and Spring Powder</b><br><br>As March begins, temperatures gradually rise and the snowfall becomes less frequent. However, there are still plenty of powder days, especially in the first half of the month. Warmer temperatures make for more comfortable skiing, and the deeper snowpack allows for longer tours into more remote areas. The snow may become heavier in the afternoons, especially on sunnier days, leading to spring-like conditions in some spots. Nonetheless, March still offers excellent skiing, particularly in higher elevations like Kamikawa’s Daisetsuzan Range."
      },
      {
        "type": "text",
        "content": "<b>● Snow Conditions:</b> Mix of fresh powder and heavier snow in warmer areas.<br><b>● Best For:</b> Skiers seeking extended tours and summiting distant peaks, thanks to warmer weather and longer days."
      },
      {
        "type": "image",
        "content": "/images/blogs/blog-8/1.jpg",
        "alt":"scenic beautiful scene hiker next to a tree covered in snow"
      },
      {
        "type": "text",
        "content": "<br><b>April: Spring Skiing and Summit Adventures</b><br><br>By April, the snow has transformed into spring 'corn snow,' which is firmer in the mornings and softens as the day goes on. While fresh powder days are fewer, the longer days and warmer temperatures make April one of the best months for summit tours that were inaccessible during the winter. Peaks that were too far or too cold to reach in January and February become more realistic goals, allowing you to explore the backcountry more extensively. The snow may be heavier in the afternoons, but the trade-off is a more relaxed and scenic backcountry experience with stunning views from the summits."
      },
      {
        "type": "text",
        "content": "<b>● Snow Conditions:</b> Firmer snow in the mornings with spring-like conditions in the afternoon.<br><b>● Best For:</b> Skiers looking to summit peaks and enjoy scenic extended tours in warmer weather."
      },
      {
        "type": "text",
        "content": "<br><b>Conclusion:</b><br><br>● <b>Best for Powder:</b> January and February are ideal for deep powder skiing with reliable snow and frequent storms.<br>● <b>Best for Summits:</b> March and April are perfect for exploring distant peaks and longer routes, thanks to warmer temperatures and extended daylight hours.<br><br>If you’re planning a backcountry ski tour in Furano or Kamikawa, consider your goals. For the deepest powder, mid-winter is unbeatable, but for summiting peaks and venturing into more remote areas, spring offers the best conditions. Book your guided tour with Yukiumi House to make the most of your backcountry adventure in Hokkaido!"
      }
    ]
  }
  ,
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
