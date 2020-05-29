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

interface EpisodeResponse {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

const fakeApi = async(): Promise<Item[]> => {
    const characterResponse = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character/');
    return mapCharactersToItems(characterResponse.data.results);

}

const getcharactersFromEpisodeRange = async (low: number, high: number): Promise<Item[]> =>{
    const list = [];
    for (let i = low; i <= high; i++) {
        list.push(i);
    }

    const episodes = await axios.get<EpisodeResponse[]>(`https://rickandmortyapi.com/api/episode/${list.toString()}`);

    // get all character inbdices from episodes
    const charactersIndices =  episodes.data.map((episode: EpisodeResponse) => episode.characters)
                                        .flat()
                                        .map((character: string) => character.split('/api/character/')[1]);
    // filter out duplicate characters
    const uniqueCharacterIndices = charactersIndices.filter((item: string, index: number) => charactersIndices.indexOf(item) === index);
    // get character details
    const characters = await axios.get(`https://rickandmortyapi.com/api/character/${uniqueCharacterIndices.toString()}`)

    return mapCharactersToItems(characters.data)

}

const mapCharactersToItems = (characters: CharacterResult[]): Item[] => {
    return characters.map((result: CharacterResult) => {
        return {
            id: result.id.toString(),
            title: result.name,
            subtitle: result.type,
            description: result.species,
            imgUrl: result.image,
            gender: result.gender
        };
    });
}



export default fakeApi;
export { getcharactersFromEpisodeRange }