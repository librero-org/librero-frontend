import { LoaderComponent } from '../loader/loader-component';
import { ScreenErrorComponent } from '../screen-error/screen-error-component';
import { useQuery, gql } from "@apollo/client";


function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) {
    return (
      <LoaderComponent></LoaderComponent>
    );
  }

  if (error) {
    return (
      <ScreenErrorComponent></ScreenErrorComponent>
    );
  }
  if (data) {
    console.log(data.hello);
    return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <p>{data.hello}</p>
      </div>
    );
  }
}

export function ExampleGQLComponent() {
  return (
    <div>
      <ExchangeRates />
    </div>
  );
}
