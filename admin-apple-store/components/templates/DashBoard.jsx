"use client";

const DashBoard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="container mx-auto h-full">
        <div className="flex gap-2 flex-wrap h-full w-full">
          <div className="flex gap-2 w-full md:w-[48.5%] flex-wrap h-full">
            <div className=" w-full md:w-[48.5%] p-1 md:p-2 bg-white rounded-lg">
              <img
                src="https://help.apple.com/assets/64F2682AAC506411740C75E5/64F2682BAC506411740C75EC/vi_VN/3282dd82331f4daee118a7a978eecc9b.png"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className=" w-full md:w-[48.5%] p-1 md:p-2 bg-white rounded-lg">
              <img
                src="https://shopdunk.com/images/thumbs/0021785_iphone-15-pro-gay-an-tuong-voi-bang-mau-doc-dao_1600.jpeg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2 bg-white rounded-lg relative ">
              <img
                src="https://image.bnews.vn/MediaUpload/Org/2022/09/08/apple-iphone-14-iphone-14-plus-hero-220907-full-bleed-image-large-20220908104459.jpg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 bg-white rounded-lg">
              <img
                src="https://image-us.24h.com.vn/upload/3-2022/images/2022-08-01/47694-93206-iphone-14-pro-cutout-xl-1659348446-429-width1280height720.jpg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className=" w-full md:w-[48.5%] p-1 flex flex-col md:p-2 bg-white rounded-lg">
              <img
                src="https://zshop.vn/images/companies/1/iphone-12.jpg?1602662047456"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className=" w-full md:w-[48.5%] p-1 flex flex-col md:p-2 bg-white rounded-lg">
              <img
                src="https://cdn.tgdd.vn//News/0//1-min(4)-730x548.jpeg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
