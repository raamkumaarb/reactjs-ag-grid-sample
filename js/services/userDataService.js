import fakeData from './fakeData';

export default class userDataService {

    createRowData() {
        var rowData = [];

        for (var i = 0; i < 10; i++) {
            var countryData = fakeData.COUNTRIES[i % fakeData.COUNTRIES.length];
            rowData.push({
                firstname: fakeData.FIRST_NAMES[i % fakeData.FIRST_NAMES.length],
                lastname : fakeData.LAST_NAMES[i % fakeData.LAST_NAMES.length],
                country: countryData.country
            });
        }

        return rowData;
    }
}