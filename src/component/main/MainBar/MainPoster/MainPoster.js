import { useEffect, useState } from "react";
import "./MainPoster.css";

function MainPoster() {
  const [poster, setPoster] = useState();
  const posters = [
    "https://assets-prd.ignimgs.com/2022/07/11/prime-day-4k-1657561761547.png",
    "https://i.ytimg.com/vi/pcl1r2qTla8/maxresdefault.jpg",
    "https://preview.redd.it/128uj78z58m01.jpg?auto=webp&s=567a883fd6dcaac205d4ba58d14519bd340fb9b4",
    "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-51732/list/0051732list3707608783707608e829b0f7e3624a75b7efd2fc3893f8aa.jpg",
    "https://wallpapercave.com/wp/wp9049807.jpg",
    "https://1.bp.blogspot.com/-nOmKnIgMRyY/YEDcfZvPOdI/AAAAAAAONS8/F1mjcVsUANcunSGyskstmK_z_8LdU5EGQCLcBGAsYHQ/s1800/Wild%2BDog%2BMovie%2BDesigns%2B%25281%2529.jpg",
    "https://www.pixel4k.com/wp-content/uploads/2019/04/captain-marvel-movie-poster-4k_1555208721.jpg",
    "https://pbs.twimg.com/media/FOlR-uHVIAIWfmO?format=jpg&name=4096x4096",
    "https://static.digit.in/OTT/v2/images/kiss-474216.jpg",
    "https://wallpapers-hub.art/wallpaper-images/645142.jpg",
    "https://www.pixel4k.com/wp-content/uploads/2019/05/aladdin-2019-movie-4k_1558219657.jpg",
    "https://img.wallpapersafari.com/desktop/1680/1050/70/97/8UQhZp.jpg",
    "https://c.wallhere.com/photos/be/a5/1920x1080_px_Clash_Of_The_Titans_movies_Sam_Worthington-631884.jpg!d",
    "https://img1.wallspic.com/crops/7/8/2/4/6/164287/164287-scarlett_johansson-black_widow-the_eternals-poster-yelena_belova-4000x2250.jpg",
    "https://b-static.besthdwallpaper.com/the-batman-2022-movie-cast-wallpaper-3840x2160-89759_54.jpg",
    "https://metadata-static.plex.tv/7/gracenote/73d5176ec2a15afb58d6d6317319e1e7.jpg",
    "https://i.pinimg.com/originals/c8/94/d5/c894d5949af5883d9bf40091f2d2634c.jpg",
  ];

  useEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * (posters.length - 1)
    );

    if (randomNumber === 0) {
      return setPoster(randomNumber + 2);
    }
  }, [posters.length]);

  return (
    <div className='mainPoster'>
      {poster && <img src={posters[poster]} alt='' />}
    </div>
  );
}

export default MainPoster;
