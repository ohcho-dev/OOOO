type AvatarSize = "small" | "medium" | "large" | "xlarge";
type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "large",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* next Image 사용 불가 이유: 구글, 카카오 등 자체적으로 가지고 있는 url을 받아와서 사용하기 때문에 도메인을 등록하기 어렵다 */}
      <img
        className={`bg-white rounded-full p-[0.1rem] ${
          getImageSizeStyle(size).image
        }`}
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer" //외부 링크에서 나타나는 엑스박스 현상 제거
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const { container } = getImageSizeStyle(size);

  return `${baseStyle} ${highlightStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};

function getImageSizeStyle(size: AvatarSize): ImageSizeStyle {
  switch (size) {
    case "small":
      return {
        container: "w-9 h-9",
        image: "w-[34px] h-[34px] p-[0.1rem]",
      };
    case "medium":
      return {
        container: "w-11 h-11",
        image: "w-[42px] h-[42px] p-[0.1rem]",
      };
    case "large":
      return {
        container: "w-[68px] h-[68px]",
        image: "w-16 h-16 p-[0.2rem]",
      };
    case "xlarge":
      return {
        container: "w-[142px] h-[142px]",
        image: "w-[138px] h-[138px] p-[0.1rem]",
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}