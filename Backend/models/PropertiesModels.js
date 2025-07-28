export class PropertiesModels {
    constructor(propertiesData) {
        this.title = propertiesData.title;
        this.location = propertiesData.location;
        this.price = propertiesData.price;
        this.property_type = propertiesData.property_type;
        this.bedrooms = propertiesData.bedrooms;
        this.bathrooms = propertiesData.bathrooms;
        this.area_sqft = propertiesData.area_sqft;
        this.status = propertiesData.status;
        this.featured = propertiesData.featured;
        this.project_id = propertiesData.project_id;
    }
}