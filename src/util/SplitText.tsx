export default function SplitText(text: string) {
  const textArray = text?.split("\n");
  const element = textArray?.map((items: string) => {
    return (
      <>
        {items}
        <br />
      </>
    );
  });

  return element;
}
