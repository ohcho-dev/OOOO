export default function SplitText(text: string) {
  const textArray = text?.split("\n");
  const element = textArray?.map((items: string, index: number) => {
    return (
      <div key={index + items}>
        {items}
        <br />
      </div>
    );
  });

  return element;
}
