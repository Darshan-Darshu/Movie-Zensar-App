import React from "react";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import LanguageBox from "./LanguageBox";

import "./Language.css";

function Language() {
  return (
    <div className='language'>
      <Sidebar />

      <div className='language__container'>
        <LanguageBox
          language='kannada'
          img='https://gumlet.assettype.com/swarajya%2F2019-10%2Fabd36812-1f7e-47de-9aed-8ec6a8dc8833%2Fkannada.jpg?q=75&auto=format%2Ccompress&w=1200'
        />
        <LanguageBox
          language='english'
          img='/images/english.jpg'
        />
        <LanguageBox
          language='tamil'
          img='https://image.shutterstock.com/z/stock-photo-word-tamil-in-golden-fonts-with-white-background-d-render-meaning-tamil-language-written-in-tamil-1968325030.jpg'
        />
        <LanguageBox
          language='hindi'
          img='/images/hindi.jpg'
        />
        <LanguageBox
          language='telugu'
          img='/images/Telugu.jpg'
        />
        <LanguageBox
          language='malayalam'
          img='https://image.shutterstock.com/image-vector/malayalam-calligraphy-letter-style-translated-260nw-2157904661.jpg'
        />
      </div>
    </div>
  );
}

export default Language;
