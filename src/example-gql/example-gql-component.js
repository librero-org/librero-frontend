import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: ' http://localhost:4000/',
    cache: new InMemoryCache()
});

client
    .query({
        query: gql`
        {
        hello
        }
    `
    })
    .then(result => console.log(result));

export function ExampleGQLComponent() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app 🚀</h2>
            </div>
        </ApolloProvider>
    )
}