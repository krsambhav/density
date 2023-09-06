interface Card{
  emoji: string,
  title: string,
  text: string
}

export default function Card(props:Card) {
  return (
    <div className="card flex flex-col gap-2 p-6 bg-[#EEEBFC] rounded-xl ">
      <div className="emoji">{props.emoji}</div>
      <div className="title font-semibold">{props.title}</div>
      <p className="text text-sm whitespace-break-spaces">
        {props.text}
      </p>
    </div>
  );
}
