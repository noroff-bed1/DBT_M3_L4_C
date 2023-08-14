class CityService {
    constructor(db) {
        this.client = db.sequelize;
        this.City = db.City;
    }

    async getAll() {
        return this.City.findAll({
            where: {}
        })
    }

}
module.exports = CityService;