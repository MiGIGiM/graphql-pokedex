import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

const client = new ApolloClient({
    uri: 'https://pokedex-graphql.onrender.com',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    allPokemon: offsetLimitPagination(),
                }
            }
        }
    })
})

export default client;
