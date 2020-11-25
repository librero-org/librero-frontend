import { LoaderComponent } from '../loader/loader-component';
import { useQuery, gql } from "@apollo/client";


function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      hellos
    }
  `);

  if (loading) {
    return (<LoaderComponent></LoaderComponent>);
  }

  if (error) {
    return (
      <p>Error :(</p>
    );
  }
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
