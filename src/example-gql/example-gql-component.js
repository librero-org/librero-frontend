import { useQuery, gql } from "@apollo/client";


function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.hello);
  return (<p>{data.hello}</p>);
}

export function ExampleGQLComponent() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  );
}
