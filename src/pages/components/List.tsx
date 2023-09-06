interface List{
  title: string,
  text: string,
}


export default function List(props:List) {
  return (
    <div className="list flex flex-col gap-2">
      <div className="title texxt-lg font-semibold">
        {props.title}
      </div>
      <div className="text">
        {props.text}
      </div>
    </div>
  );
}
