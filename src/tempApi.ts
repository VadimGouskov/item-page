import axios from 'axios'
import Item from './types/item';

interface CharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
  };
  results: CharacterResult[];
    
}

interface CharacterResult {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

const fakeApi = async(): Promise<Item[]> => {
    const characters = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character/');
    // map API response to Item
    return characters.data.results.map((result: CharacterResult) => {
        return {
            id: result.id.toString(),
            title: result.name,
            subtitle: result.type,
            description: result.species,
        };
    });
}

export default fakeApi;