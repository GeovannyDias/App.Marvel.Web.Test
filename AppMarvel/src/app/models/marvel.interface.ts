export interface RootObjectMarvelI {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: DataI;
}

export interface DataI {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ResultMarvelI[];
}

export interface ResultMarvelI {
    id: number;
    name: string;
    description: string;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
    urls: Url[];
}


interface Comics {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

interface Item4 {
    resourceURI: string;
    name: string;
}

interface Events {
    available: number;
    collectionURI: string;
    items: Item4[];
    returned: number;
}

interface Series {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: Item3[];
    returned: number;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface Url {
    type: string;
    url: string;
}

// ITEMS *********************************************

interface Item {
    resourceURI: string;
    name: string;
}


interface Item2 {
    resourceURI: string;
    name: string;
}

interface Item3 {
    resourceURI: string;
    name: string;
    type: string;
}
