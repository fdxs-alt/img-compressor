import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import { extendDefaultPlugins } from "svgo";

(async () => {
  await imagemin(["images/*.{jpg,png,svg}"], {
    destination: "comp/",
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.7],
      }),
      imageminMozjpeg({ quality: 60 }),
      imageminSvgo({
        plugins: extendDefaultPlugins([
          { name: "removeViewBox", active: false },
        ]),
      }),
    ],
  });

  console.log("Files compressed");
})();
