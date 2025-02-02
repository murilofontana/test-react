import Link from "next/link";


const mockUrls = [
  "https://tm.ibxk.com.br/2023/12/28/28111044356036.jpg",
  "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2022/01/10/tibia-online.png",
  "https://acusticafm.com.br/wp-content/uploads/elementor/thumbs/img_48460_foto_1-q7bdk5xhefdxragz4e46frn3ul0st4kwah73yl1nhm.jpg",
  "https://tibiastories.com.br/wp-content/uploads/2021/11/Tibia-IronMan.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}

      </div>
    </main>
  );
}
