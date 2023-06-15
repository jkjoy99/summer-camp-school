import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="py-20">
      <div className="text-center pb-20 w-1/2 mx-auto">
        <h1 className="text-5xl font-bold text-purple-700 drop-shadow-2xl">
          Our Gallery
        </h1>
        <p className="mt-5 leading-relaxed calor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magni nostrum quas alias possimus labore Lorem ipsum dolor,sit amet
        </p>
      </div>
      <div className="gallery">
        <figure className="gallery__item gallery__item--1" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/side-view-musicians-working-studio_23-2150265047.jpg?w=740&t=st=1686810970~exp=1686811570~hmac=b556c707e005254d96463c4a62c2a1174c0033383910cfe53efcdf099b23f782"
            
            alt="Gallery image 1"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-vector/music-monochrome-elements-set_1284-34982.jpg?w=740&t=st=1686810119~exp=1686810719~hmac=98244c8d7f8117eaac1e2c13eeb09a7e8107ce14201f5b3317e6b95d75db90ef"
            alt="Gallery image 2"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/close-up-band-concert_23-2149162968.jpg?w=740&t=st=1686810194~exp=1686810794~hmac=675289da40a60de34ed99983bfc8335d79880a636762da01ff060993190c05b3"
            alt="Gallery image 3"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/close-up-drum-cymbal-as-drummer-plays_169016-12928.jpg?w=996&t=st=1686810253~exp=1686810853~hmac=9ee87f628935a430ef68e7ad612bb32d319057cc7ac0d81f416c2453af15dd80"
            alt="Gallery image 4"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/drum-sticks-hitting-snare-drum-with-splashing-water-black-background-stage-lighting_169016-14166.jpg?w=740&t=st=1686810305~exp=1686810905~hmac=1fc6750e50eece7d748d834f817f8ed38ca43eab892887e45bea00f665aa708a"
            alt="Gallery image 5"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/people-concert-with-smoke-overlay-texture_53876-126856.jpg?w=740&t=st=1686810394~exp=1686810994~hmac=6a4c821aadcae609e8aae7610c4fa4c272d0aa6a34ac1fae0f0b957ddadd3e5f"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/premium-photo/man-playing-violin-black-background_488220-13803.jpg?w=740"
            alt="Gallery image 7"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/close-up-hand-playing-saxophone_23-2149247146.jpg?w=740&t=st=1686810917~exp=1686811517~hmac=6b6143e1ad14daacfc2ed3eeb9d9b98ad2ed5fa422afe09e17bbefa76eb8349f"
            alt="Gallery image 8"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/premium-photo/high-angle-musician-working-studio_23-2150265063.jpg?w=740"
            alt="Gallery image 9"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/closeup-shot-dj-s-equipment-people-dancing-club_181624-58753.jpg?w=740&t=st=1686810686~exp=1686811286~hmac=9b7b6f0308991328a65efc6b01b745f6e73a88363896085c43aa880a0603542b"
            alt="Gallery image 10"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--11" data-aos="zoom-in">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/89/99/11/1000_F_389991165_1LfNAPTK67fhFa9u5enKSXdc8Maa1Iks.jpg"
            alt="Gallery image 11"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/musician-playing-piano-jazz-day_23-2149324191.jpg?w=996&t=st=1686811027~exp=1686811627~hmac=9ef79c24be4098b12664a5aae957e2f0d78f5ed96882b1f88014f1efe30cb36d"
          />
        </figure>
        <figure className="gallery__item gallery__item--13" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/premium-photo/this-concert-is-level_695793-963.jpg?w=740"
            alt="Gallery image 13"
            className="gallery__img"
          />
        </figure>
       
      </div>
    </div>
  );
};

export default Gallery;
