export class PropertiesModels {
    constructor(propertiesData) {
        this.title = propertiesData.title;
        this.location = propertiesData.location;
        this.minPrice = propertiesData.minPrice;
        this.maxPrice = propertiesData.maxPrice;
        this.category = propertiesData.category;
        this.property_type = propertiesData.property_type;
        this.bedrooms = propertiesData.bedrooms;
        this.bathrooms = propertiesData.bathrooms;
        this.balcony = propertiesData.balcony;
        this.store = propertiesData.store;
        this.super_area = propertiesData.super_area;
        this.carpet_area = propertiesData.carpet_area;
        this.status = propertiesData.status;
        this.description = propertiesData.description;
        this.project_id = propertiesData.project_id;
    }
}