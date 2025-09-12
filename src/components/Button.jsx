export default function Button({ title, classes, ...props }) {
  let newClass =
    "text-gray-50 bg-gray-500 py-2 px-3 rounded-md hover:bg-gray-50 hover:text-gray-900 mt-2";

  if (classes.trim().length !== 0) {
    newClass += " " + classes;
  }

  return (
    <button className={newClass} {...props}>
      {title}
    </button>
  );
}
