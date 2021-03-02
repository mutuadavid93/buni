export default function Button({
  link = "#",
  title = "View Docs",
  classname = "primary-btn"
}) {
  return (
    <a href={link} className={classname}>
      {title}
    </a>
  );
}
