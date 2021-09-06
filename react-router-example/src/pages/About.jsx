export default function About(props) {
  const searchParams = props.location.search;
  console.log(searchParams);
  const obj = new URLSearchParams(searchParams);
  console.log(obj.get("name"));
  return (
    <div>
      <h2>About 페이지입니다.</h2>
    </div>
  );
}
