export default class FetchData {

    BASE_URL = 'https://api.spacexdata.com/v4/';

    getRecource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getRocket = async () => 
        await this.getRecource(this.BASE_URL + 'rockets');

    getLaunches = async () => 
        await this.getRecource(this.BASE_URL + 'launches/past');

    getCompany = async () => 
        await this.getRecource(this.BASE_URL + 'company');

}