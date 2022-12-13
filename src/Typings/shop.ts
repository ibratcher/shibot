interface shop {
    pickupBrand: {
        image: {
            url: string;
        }
        saleEndTime: string;
        brand: {
            name: string;
            image: {
                url: string;
            }
            usualGearPower: {
                name: string;
                image: {
                    url: string;
                }
                desc: string;
            }
        }
        brandGears: [
            {
                price: number;
                gear: {
                    name: string;
                    image: {
                        url: string;
                    }
                    primaryGearPower: {
                        name: string;
                        image: {
                            url: string;
                        }
                    }
                    additionalGearPowers: [
                        {
                            name: string;
                            image: {
                                url: string;
                            }
                        }
                    ]
                    brand: {
                        name: string;
                        image: {
                            url: string;
                        }
                    }
                }
            }
        ]
    }
    limitedGears: [
        {
            price: number;
            saleEndTime: string;
            gear: {
                name: string;
                image: {
                    url: string;
                }
                primaryGearPower: {
                    name: string;
                    image: {
                        url: string;
                    }
                }
                additionalGearPowers: [
                    {
                        name: string;
                    }
                ]
                brand: {
                    name: string;
                    image: {
                        url: string;
                    }
                }

            }
        }
    ]
}