let baseURL: string;

const determineBaseURL = () => {
    const hostname = window.location.hostname;

    baseURL = 'http://127.0.0.1:8000/';

  console.log(`services| Base URL is set to: ${baseURL}`);
};

determineBaseURL();

export { baseURL };