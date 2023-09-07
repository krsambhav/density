import { gsap } from "gsap";

interface List{
  title: string,
  text: string,
}

const onEnter = ({currentTarget}:any) => {
  gsap.to(currentTarget, {
    scale: 1.05,
    ease: "sine.out"
  })
  gsap.to(currentTarget.querySelector('.title'), {
    color: '#000',
  })
  gsap.to(currentTarget.querySelector('.text'), {
    color: '#000',
  })
}

const onLeave = ({currentTarget}:any) => {
  gsap.to(currentTarget, {
    scale: 1,
    ease: "sine.out"
  })
  gsap.to(currentTarget.querySelector('.title'), {
    color: '#AAA',
  })
  gsap.to(currentTarget.querySelector('.text'), {
    color: '#AAA',
  })
}

export default function List(props:List) {
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave} className="list flex flex-col gap-2 px-5">
      <div className="title text-lg font-semibold">
        {props.title}
      </div>
      <div className="text">
        {props.text}
      </div>
    </div>
  );
}
