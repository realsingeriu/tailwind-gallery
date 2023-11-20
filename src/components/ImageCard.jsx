import React from "react";

const ImageCard = ({ image }) => {
  // console.log(image);
  const tags = image.tags.split(', '); // ', ' 분리해서 배열로 저장됨
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img src={image.largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-y-4 px-6 py-4 text-xs">
        {tags.map((tag, idx) => (
          <span key={idx} className="inline-block bg-green-300 rounded-full px-3 py-1  font-semibold text-black-700 mr-2 mb-0">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
