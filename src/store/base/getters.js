import { get, union } from 'lodash'

export default {
    getCityMetro: state => cityId => {
        return get(state.allMetro, cityId, [])
    },

    getCityLocations: state => {
        let names = state.allCities.map(city => {
            return  {
                city: city.name
            }
        })

        let regions = state.allCities.filter(city => city.region).map(city => {
            return {
                region: city.region
            }
        })

        return union(names, regions);
    },
}