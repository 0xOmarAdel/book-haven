type Props = {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  let classes = 'w-fit h-fit bg-transparent border shadow-lg rounded px-8 pt-6 pb-8'
  if (props.className) {
    classes += ' ' + props.className;
  }

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

export default Card;