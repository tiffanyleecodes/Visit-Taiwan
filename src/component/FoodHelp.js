import bum from "../asset/bum.jpg";
import bubble from "../asset/bubble.jpg";
import beef from "../asset/beef.jpg";
import minceRice from "../asset/minceRice.jpg";
import gao from "../asset/gao.jpg";
import oyster from "../asset/oyster.jpg";
import tofu from "../asset/tofu.jpg";
import sausage from "../asset/sausage.jpg";
import chickenCake from "../asset/chickenCake.jpg";
import chicken from "../asset/chicken.jpg";

export const FoodhelpFeatures = [
  {
    image: bum,
    title: "Ding Tai Fung",
    text: "A Globally Renowned Restaurant Chain Offering Exquisite Xiaolongbao and Traditional Taiwanese Cuisine.",
    note: (
      <p>
        Find branch&nbsp;
        <a
          href="https://www.dintaifung.com.tw/eng/store.php"
          target="_blank"
          className="underline hover:text-cyan-700"
        >
          here
        </a>
      </p>
    ),
  },
  {
    image: bubble,
    title: "Bubble Tea",
    text: "The Refreshing and Fun Drink with a Burst of Flavorful Surprises",
    note: "Recommend: 50 Lan, Chun Shui Tang, KEBUKE Tea",
  },
  {
    image: beef,
    title: "Beef Noodle Soup",
    text: "Taiwanese Beef Noodle Soup is a classic comfort dish in Taiwan, made with tender beef, flavorful broth, and chewy noodles. ",
    note: "Recommend: Yong Kang Beef Noodle , Lao Zhang Beef Noodle, Lin Dong Fang Beef Noodle",
  },
];

export const FoodhelpTradition = [
  {
    image: minceRice,
    title: "Braised Pork Rice",
    text: "A popular and comforting Taiwanese dish that consists of flavorful braised pork belly served over a bed of steamed rice.",
    note: "Recommend: Jin Feng Braised Pork Rice , Chen Ji Braised Pork Rice",
  },
  {
    image: gao,
    title: "Gua Bao",
    text: " A steamed bun filled with tender braised pork belly, pickled mustard greens, and ground peanuts.",
    note: "Recommend: Lan Jia Gua Bao , A-Zhong Gua Bao ",
  },
  {
    image: oyster,
    title: "Oyster Omelette",
    text: " A popular street food dish made with small oysters, eggs, and starch that is fried until crispy.",
    note: "Where to eat: Beitou Market , Gong Guan Night Market",
  },
];

export const FoodhelpNightmarket = [
  {
    image: tofu,
    title: "Stinky Tofu ",
    text: "A pungent fermented tofu that is deep-fried and served with pickled cabbage and chili sauce",
  },
  {
    image: sausage,
    title: "Xiang Chang",
    text: " A popular street food that is savory, juicy, and bursting with flavor. It is a must-try for foodies and a favorite among locals and tourists alike",
  },
  {
    image: chickenCake,
    title: "Fried Chicken Cutlet",
    text: " Crispy and juicy chicken cutlet seasoned with a variety of spices",
  },
  {
    image: chicken,
    title: " Taiwanese fried chicken ",
    text: "  A beloved street food that is crispy, juicy, and bursting with bold and savory flavors",
  },
];
