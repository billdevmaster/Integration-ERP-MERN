
const staging = {
    apiUrl: "https://yourEBSname-env.xxxxxx.yourRegion.elasticbeanstalk.com/api"
}

const dev = {
    apiUrl: "http://localhost:3000/api"
}

export const environment = process.env.NODE_ENV === "development" ? dev : staging;