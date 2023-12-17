import Page from "./_page";
export async function generateMetadata(props) {
  return {
    title: "Search - " + props.searchParams.search_query,
  };
}
export default function (props) {
  return <Page {...props}/>;
}